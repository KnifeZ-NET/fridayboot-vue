import { BasicColumn, FormSchema } from '/@/components/Table';
import { isAccountExist } from '/@/api/security/admin/user';
import { allRoles } from '/@/api/security/admin/role';

export const columns: BasicColumn[] = [
  {
    title: '帐号',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '锁定',
    dataIndex: 'locked',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
  },
  {
    field: 'account',
    label: '帐号',
    component: 'Input',
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
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    ifShow: false,
  },
  {
    field: 'organizationId',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    label: '角色',
    field: 'roles',
    component: 'ApiSelect',
    componentProps: {
      api: allRoles,
      labelField: 'displayName',
      valueField: 'id',
      mode: 'multiple',
    },
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
  },
  {
    label: '锁定',
    field: 'locked',
    component: 'Switch',
    defaultValue: false,
  },

  // {
  //   label: '备注',
  //   field: 'remark',
  //   component: 'InputTextArea',
  // },
];
