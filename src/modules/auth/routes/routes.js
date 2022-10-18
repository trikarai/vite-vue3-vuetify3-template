import AuthLayout from '@/layouts/auth/AuthLayout.vue'

export default [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/modules/auth/pages/LoginPage.vue'),
        meta: {
            layout: AuthLayout
        }
    }
]
