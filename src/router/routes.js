const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "simulator",
        name: "simulator",
        component: () => import("pages/SimulatorPage.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("pages/ContactForm.vue"),
      },
      {
        path: "perspective",
        name: "perspective",
        component: () => import("pages/PerspectivePage.vue"),
      },
      {
        path: "quemsomos",
        name: "quemsomos",
        component: () => import("pages/WhoWeAre.vue"),
      },
      {
        path: "nossaequipe",
        name: "nossaequipe",
        component: () => import("pages/OurTeamPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../system/layouts/LoginPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
