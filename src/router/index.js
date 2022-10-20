import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "@/store/auth/Auth";
import { useModal } from "@/store/modal/Modal";

const routes = [];

const modules = import.meta.glob("/**/*/routes.js");

for (const path in modules) {
  const module = await modules[path]();
  routes.push(...module.default);
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
      component: () => import("@/view/common/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const auth = useAuth();
  const modal = useModal();

  modal.overlay = true;

  if (to.matched.some((m) => m.meta.requireAuth) && !auth.isAuthenticated) {
    next({ path: "/", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

router.afterEach(() => {
  const modal = useModal();

  modal.overlay = false;
});

export default router;
