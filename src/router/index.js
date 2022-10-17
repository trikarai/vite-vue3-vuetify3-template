import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/store/auth/Auth'

const routes = []

const modules = import.meta.glob('/**/*/routes.js')

for (const path in modules) {
    const module = await modules[path]()
    routes.push(...module.default)
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Auto register routes
        ...routes,
        // Not Found
        {
            // path: "/:catchAll(.*)",
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () =>
                import("@/view/common/NotFound.vue"),
        },
    ]
})

export default router
