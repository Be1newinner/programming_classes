import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const menuLocations = [
  {
    id: 1,
    path: "routes/form.jsx",
    slug: "form",
    title: "FORM",
  },
  {
    id: 2,
    path: "routes/api.jsx",
    slug: "api",
    title: "API Handling",
  },
  {
    id: 3,
    path: "routes/api_card.jsx",
    slug: "api_card",
    title: "API Cards",
  },
  {
    id: 4,
    path: "routes/use_ref_hook.jsx",
    slug: "use-ref-hook",
    title: "useRef Hook",
  },
  {
    id: 5,
    path: "routes/use_reducer_hook.jsx",
    slug: "use-reducer-hook",
    title: "useReducer Hook",
  },
];

export default [
  index("routes/home.jsx"),
  ...menuLocations.map((item) => route(item.slug, item.path)),
] satisfies RouteConfig;
