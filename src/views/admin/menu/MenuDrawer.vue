<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './menu.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import { menuTreeList, update, create, getMenuPermissionList } from '/@/api/security/admin/menu';
  import { listByDictCode } from '/@/api/security/config/dictionaryConfig';
  import { TreeItem } from '/@/components/Tree';

  export default defineComponent({
    name: 'MenuDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const permissionTreeData = ref<TreeItem[]>([]);
      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
        const treeData = await menuTreeList({ includeButton: false });
        updateSchema({
          field: 'parentId',
          componentProps: { treeData },
        });
        const menuPermissionData = await getMenuPermissionList();
        const tempTrees: any = [];
        var paths = menuPermissionData.data.paths;
        for (var path in paths) {
          var methods = paths[path];
          for (var action in methods) {
            if (methods[action].tags.length > 0) {
              methods[action].tags.forEach((tag: string) => {
                if (!tempTrees.find((x) => x.id == tag)) {
                  tempTrees.push({
                    id: tag,
                    name: tag,
                    children: [] as never,
                  });
                }
                tempTrees
                  .find((x) => x.id == tag)
                  .children.push({
                    id: path + ':' + action,
                    name: tag + '/' + methods[action].summary,
                  });
              });
            }
          }
        }
        permissionTreeData.value = tempTrees;
        updateSchema({
          field: 'permission',
          componentProps: { treeData: permissionTreeData },
        });
        var buttonList = await listByDictCode({ dictCode: 'system_button' });
        var buttons = buttonList.map(function (item) {
          return { code: item.value, value: item.name };
        });
        updateSchema({
          field: 'type',
          componentProps: {
            onChange: function (e) {
              if (e.target) {
                if (e.target.value == 2) {
                  // 按钮
                  updateSchema({
                    field: 'name',
                    component: 'AutoComplete',
                    componentProps: {
                      options: buttons,
                      onChange: function (value, option) {
                        console.log(value);
                        if (option.code) {
                          setFieldsValue({
                            route: option.code,
                          });
                        }
                      },
                    },
                  });
                } else {
                  updateSchema({
                    field: 'name',
                    component: 'Input',
                    componentProps: {
                      onChange: function (value) {
                        console.log(value);
                      },
                    },
                  });
                }
              }
            },
          },
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增菜单' : '编辑菜单'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          if (unref(isUpdate)) {
            update({ ...values, id: rowId.value });
          } else {
            create(values);
          }
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
