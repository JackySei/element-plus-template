/* eslint-disable key-spacing */
/* eslint-disable comma-dangle */
const NotFind = () => import('@/views/404.vue');
export default [
  {
    path: '/',
    redirect: { name: 'PGC' },
  },

  {
    name: 'PGC',
    path: '/ecrs',
    meta: { title: '主页', icon: 'home' },
    redirect: { name: 'check' },
    component: () => import('@/views/index.vue'),
    children: [
      {
        name: 'check',
        path: 'check',
        // component: () => import('../../views/check/index.vue'),
        redirect: { name: 'Person' },
        meta: {
          title: '审核统计',
        },
        children: [
          {
            name: 'Person',
            path: '/ecrs/check/person',
            component: () => import('../../views/check/person.vue'),
            meta: {
              title: '个人审核统计',
            },
          },
          {
            name: 'Team',
            path: '/ecrs/check/team',
            // component: () => import('../../views/check/team.vue'),
            meta: {
              title: '团队审核统计',
            },
          },
        ],
      },
    ],
  },

  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'Noright',
    path: '/noright',
    component: () => import('@/views/noRight.vue'),
  },
  {
    path: '/404',
    name: 'error',
    component: NotFind,
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFind,
    // redirect: { name: 'error' },
  },
];
