import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dictionary: AppRouteModule = {
  path: '/config',
  name: 'Dictionary',
  component: LAYOUT,
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.menu.config.moduleName'),
  },
  children: [
    {
      path: 'dictionary',
      name: 'DictManagement',
      meta: {
        title: t('routes.menu.config.dictionaryManagement'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/config/dict/index.vue'),
    },
  ],
};

export default dictionary;
