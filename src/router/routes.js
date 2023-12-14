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
      {
        path: "investimentos",
        name: "investimentos",
        component: () => import("pages/ManagementPage.vue"),
      },
      {
        path: "quadrivium",
        name: "quadrivium",
        component: () => import("pages/QuadriviumPage.vue"),
      },
      {
        path: "rendavariavel",
        name: "rendavariavel",
        component: () => import("pages/VariableincomePage.vue"),
      },
      {
        path: "rendafixa",
        name: "rendafixa",
        component: () => import("pages/SecurityincomePage.vue"),
      },
      {
        path: "rendaflexivel",
        name: "rendaflexivel",
        component: () => import("pages/FlexibleincomePage.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../system/pages/LoginPage.vue"),
  },
  {
    path: "/system/",
    component: () => import("../system/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../system/pages/DashboardPage.vue"),
      },
      {
        path: "config",
        name: "config",
        component: () => import("../system/pages/ConfigPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
