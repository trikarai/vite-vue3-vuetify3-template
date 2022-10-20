export default [
  {
    path: "/",
    name: "Login",
    component: () => import("@/modules/auth/pages/LoginPage.vue"),
    meta: {
      layout: "auth",
      title: "Login",
      requireAuth: false,
    },
  },
];
