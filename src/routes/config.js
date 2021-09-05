const schemeRoutes = {
  "/": {
    exact: true,
    hidden: true,
    component: "@/pages/Popular/Popular",
    // redirect: "/pages/Popular",
  },

  "/battle": {},
};

const arrayRoutes = [
  {
    path: "/",
    exact: true,
    component: "@/pages/Battle/Battle",
    // redirect: "/pages/Battle"
  },
];

export { schemeRoutes as default, schemeRoutes, arrayRoutes };
