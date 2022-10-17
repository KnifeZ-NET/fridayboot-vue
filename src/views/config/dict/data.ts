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
    dataIndex: 'enabled',
    width: 120,
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
    field: 'enabled',
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

export const configColumns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '数据值',
    dataIndex: 'value',
    width: 120,
  },
  {
    title: '数据类型',
    dataIndex: 'valueType',
    width: 120,
  },
  {
    title: '是否启用',
    dataIndex: 'enabled',
    width: 120,
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

export const configFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '字典名称',
    component: 'Input',
  },

  {
    field: 'value',
    label: '数据值',
    component: 'Input',
    required: true,
  },

  {
    field: 'valueType',
    label: '数据类型',
    component: 'Input',
  },
  {
    field: 'labelLevel',
    label: '标签等级',
    component: 'Input',
  },
  {
    field: 'sort',
    label: '排序',
    component: 'InputNumber',
  },
  {
    field: 'enabled',
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
