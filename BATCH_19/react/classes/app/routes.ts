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
  {
    id: 3,
    title: "Use Ref Hook",
    route: "/reference",
    path: "routes/reference_hook.tsx",
  },
  {
    id: 4,
    title: "Reducer Hook",
    route: "/reducer",
    path: "routes/reducer_hook.tsx",
  },
];

export default [
  index("routes/home.tsx"),
  ...routesList.map((e) => route(e.route, e.path)),
] satisfies RouteConfig;
