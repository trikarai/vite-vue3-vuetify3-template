import LayoutAuth from '../../../layouts/auth/LayoutAuth.vue'

export default [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/modules/auth/pages/LoginPage.vue'),
        meta: {
            layout: LayoutAuth
        }
    }
]
