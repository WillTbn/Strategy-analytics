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
    props: true,
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
      {
        name: "calendar",
        path: "calendar",
        component: () => import("../system/pages/CalendarPage.vue"),
      },
      {
        path: "loan",
        name: "loan",
        component: () => import("../system/pages/LoanPage.vue"),
      },
      {
        path: "report",
        name: "report",
        component: () => import("../system/pages/ReportPage.vue"),
      },
      {
        path: "perfomance",
        name: "perfomance",
        component: () => import("../system/pages/PerfomancePage.vue"),
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
