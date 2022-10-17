<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" showFooter title="字典配置" width="60%">
    <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
      <BasicTable @register="registerTable" :search-info="searchInfo">
        <template #toolbar>
          <a-button type="primary" @click="handleCreate">新增字典配置</a-button>
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
              ]"
            />
          </template>
          <template v-else-if="column.key === 'enabled'">
            <Switch v-model:checked="record.enabled" :disabled="true" />
          </template>
        </template>
      </BasicTable>
      <dictionary-config-modal @register="registerModal" @success="handleSuccess" />
    </PageWrapper>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import DictionaryConfigModal from './DictionaryConfigModal.vue';
  import { useModal } from '/@/components/Modal';
  import { pageListByDictCode, remove } from '/@/api/security/config/dictionaryConfig';
  import { configColumns } from './data';
  import { Switch } from 'ant-design-vue';

  export default defineComponent({
    name: 'MenuDrawer',
    components: {
      BasicDrawer,
      BasicTable,
      PageWrapper,
      TableAction,
      Switch,
      DictionaryConfigModal,
    },
    emits: ['success', 'register'],
    setup() {
      const rowCode = ref('');
      const searchInfo = ref({ dictCode: 'config' });
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '',
        api: pageListByDictCode,
        columns: configColumns,
        rowKey: 'id',
        bordered: true,
        showTableSetting: true,
        useSearchForm: false,
        pagination: false,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
      });
      const [registerDrawer, { setDrawerProps }] = useDrawerInner(async (data) => {
        searchInfo.value.dictCode = data.record.code;
        rowCode.value = data.record.code;
        reload();
        setDrawerProps({ confirmLoading: false });
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          dictCode: rowCode.value,
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
        reload();
      }
      function handleSuccess() {
        setDrawerProps({ confirmLoading: true });
        reload();
        setDrawerProps({ confirmLoading: false });
      }
      return {
        registerDrawer,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        openModal,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
