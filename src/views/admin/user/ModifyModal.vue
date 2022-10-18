<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './data';
  import { organizationTreeList } from '/@/api/security/admin/organizationUnit';
  import { isAccountExist, getUserRoles, create, update } from '/@/api/security/admin/user';
  export default defineComponent({
    name: 'ModifyModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');
      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          updateSchema([{ field: 'password', ifShow: false }]);
          updateSchema([{ field: 'account', dynamicDisabled: isUpdate.value, rules: [] }]);
          rowId.value = data.record.id;
          data.record.roles = await getUserRoles(rowId.value);
          console.log(data.record.roles);
          setFieldsValue({
            ...data.record,
          });
        } else {
          updateSchema([{ field: 'password', ifShow: true }]);
          updateSchema([
            {
              field: 'account',
              dynamicDisabled: isUpdate.value,
              rules: [
                {
                  required: true,
                  message: '请输入用户名',
                },
                {
                  validator(_, value) {
                    return new Promise((resolve, reject) => {
                      if (value === '') {
                        resolve();
                      } else {
                        isAccountExist(value)
                          .then(() => resolve())
                          .catch((err) => {
                            reject(err.message || '验证失败');
                          });
                      }
                    });
                  },
                },
              ],
            },
          ]);
        }
        const treeData = await organizationTreeList({});
        updateSchema([{ field: 'organizationId', componentProps: { treeData } }]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          if (unref(isUpdate)) {
            update({ ...values, id: rowId.value });
          } else {
            create(values);
          }
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
