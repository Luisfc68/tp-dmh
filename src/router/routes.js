
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        redirect: '/login',
        component: () => import('pages/Index.vue'),
        children: [
          {
            path: 'login',
            name: 'login',
            component: () => import('components/auth/LoginCard.vue')
          },
          {
            path: 'signup',
            name: 'signup',
            component: () => import('components/auth/SignUpCard.vue')
          }
        ]
       }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
