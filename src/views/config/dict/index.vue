<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增字典</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
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
              {
                icon: 'clarity:wrench-line',
                tooltip: '字典配置',
                onClick: handleConfig.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-else-if="column.key === 'isEnabled'">
          <Switch v-model:checked="record.isEnabled" :disabled="true" />
        </template>
      </template>
    </BasicTable>
    <modify-modal @register="registerModal" @success="handleSuccess" />
    <dictionary-config-modal @register="registerConfigModal" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { columns, searchFormSchema } from './data';
  import { pagelist, remove } from '/@/api/security/config/dictionary';
  import { Switch } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import ModifyModal from './ModifyModal.vue';
  import DictionaryConfigModal from './DictionaryConfigModal.vue';
  export default defineComponent({
    components: {
      PageWrapper,
      BasicTable,
      TableAction,
      ModifyModal,
      DictionaryConfigModal,
      Switch,
    },
    setup() {
      const searchInfo = reactive<Recordable>({});
      const [registerModal, { openModal }] = useModal();
      const [registerConfigModal, { openModal: openConfigModal }] = useModal();
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '角色列表',
        api: pagelist,
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
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
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

      function handleConfig(record: Recordable) {
        openConfigModal(true, {
          record,
        });
      }

      function handleDelete(record: Recordable) {
        remove(record.id);
        reload();
      }
      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleSelect() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        registerConfigModal,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleCreate,
        handleConfig,
        searchInfo,
      };
    },
  });
</script>
