
const routes = [
  {
    path: '/',
    redirect: 'app',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { 
        path: 'auth', 
        redirect: 'login',
        component: () => import('pages/Index.vue'),
        children: [
          {
            path: '',
            name: 'login',
            component: () => import('components/auth/LoginCard.vue')
          },
          {
            path: '',
            name: 'signup',
            component: () => import('components/auth/SignUpCard.vue')
          }
        ]
       }
    ]
  },

  {
    path: '/app',
    component: () => import('src/layouts/AppLayout.vue'),
    children:[
      {
        path: '',
        name:'lobby',
        component: () => import('src/pages/ChatSelection.vue')
      },
      {
        path: '',
        name: 'chat',
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
