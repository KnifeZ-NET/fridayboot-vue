import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '角色',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'displayName',
    width: 120,
  },
  {
    title: '角色介绍',
    dataIndex: 'description',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'displayName',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '角色',
    component: 'Input',
  },

  {
    field: 'displayName',
    label: '角色名称',
    component: 'Input',
    required: true,
  },

  {
    label: '角色介绍',
    field: 'description',
    component: 'InputTextArea',
  },
];
