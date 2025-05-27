import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routesList = [
  {
    id: 0,
    title: "Components and Counter",
    route: "/comp_counter",
    path: "routes/comp_counter.tsx",
  },
  {
    id: 1,
    title: "Basic Forms",
    route: "/forms",
    path: "routes/forms_basic.tsx",
  },
  {
    id: 2,
    title: "Advance Forms",
    route: "/forms_advanced",
    path: "routes/forms_advance.tsx",
  },
];

export default [
  index("routes/home.tsx"),
  ...routesList.map((e) => route(e.route, e.path)),
] satisfies RouteConfig;
