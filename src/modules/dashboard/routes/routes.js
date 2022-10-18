export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/modules/dashboard/pages/DashboardPage.vue'),
        meta: {
            title: 'Dashboard',
            name: '',
            breadcrumb: '',
            requireAuth: true
        }
    }
]
