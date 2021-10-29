
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
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

  {
    component: () => import('src/layouts/AppLayout.vue'),
    children:[
      {
        path: '/lobby',
        component: () => import('src/pages/ChatSelection.vue')
      },
      {
        path: '/chat',
        component: () => import('src/pages/ChatPage.vue') 
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
