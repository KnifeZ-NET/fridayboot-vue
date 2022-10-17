<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrganizationTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" :searchInfo="searchInfo" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              // {
              //   icon: 'clarity:info-standard-line',
              //   tooltip: '查看用户详情',
              //   onClick: handleView.bind(null, record),
              // },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
        <template v-else-if="column.key === 'locked'">
          <Switch v-model:checked="record.locked" :disabled="true" />
        </template>
      </template>
    </BasicTable>
    <ModifyModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';
  import { columns, searchFormSchema } from './data';
  import OrganizationTree from './OrganizationTree.vue';
  import { userList, remove } from '/@/api/security/admin/user';

  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import ModifyModal from './ModifyModal.vue';
  export default defineComponent({
    components: { PageWrapper, BasicTable, TableAction, OrganizationTree, ModifyModal, Switch },
    setup() {
      const go = useGo();
      const searchInfo = reactive<Recordable>({});
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '帐号列表',
        api: userList,
        columns,
        rowKey: 'id',
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
        },
        bordered: true,
        showTableSetting: true,
        useSearchForm: true,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        remove(record.id);
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          updateTableDataRecord(values.id, values);
        } else {
          reload();
        }
      }

      function handleSelect(organizationId = '') {
        searchInfo.organizationId = organizationId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/admin/user_detail/' + record.id);
      }

      return {
        registerModal,
        registerTable,
        handleView,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleCreate,
        searchInfo,
      };
    },
  });
</script>
