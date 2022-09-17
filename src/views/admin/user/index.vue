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
              {
                icon: 'clarity:info-standard-line',
                tooltip: '查看用户详情',
                onClick: handleView.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';
  import { columns, searchFormSchema } from './data';
  import OrganizationTree from './OrganizationTree.vue';
  import { pagelist } from '/@/api/security/admin/user';
  export default defineComponent({
    components: { PageWrapper, BasicTable, TableAction, OrganizationTree },
    setup() {
      const go = useGo();
      const searchInfo = reactive<Recordable>({});
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '帐号列表',
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
        console.log('created');
        openModal(true, {
          isUpdate: false,
        });
      }
      function handleDelete(record: Recordable) {
        console.log(record);
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

      function handleSelect(organizationUnitId = '') {
        searchInfo.organizationUnitId = organizationUnitId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/admin/user_detail/' + record.id);
      }

      return {
        registerTable,
        handleView,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleCreate,
        searchInfo,
      };
    },
  });
</script>
