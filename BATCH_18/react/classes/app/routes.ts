import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("form", "routes/form.jsx"),
  route("api", "routes/api.jsx"),
] satisfies RouteConfig;
