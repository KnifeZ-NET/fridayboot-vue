import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '字典名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '字典编码',
    dataIndex: 'code',
    width: 120,
  },
  {
    title: '是否启用',
    dataIndex: 'isEnabled',
    width: 120,
    // slots: { customRender: 'isEnabled' },
  },
  {
    title: '备注',
    dataIndex: 'description',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 120,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '字典名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'code',
    label: '字典编码',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '字典名称',
    component: 'Input',
  },

  {
    field: 'code',
    label: '字典编码',
    component: 'Input',
    required: true,
  },

  {
    field: 'isEnabled',
    label: '状态',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '启用',
          value: true,
        },
        {
          label: '禁用',
          value: false,
        },
      ],
    },
    defaultValue: true,
  },
  {
    label: '备注',
    field: 'description',
    component: 'InputTextArea',
  },
];
