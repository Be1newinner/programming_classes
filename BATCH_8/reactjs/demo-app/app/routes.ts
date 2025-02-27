import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.jsx"),
  route("state", "routes/UseState.jsx"),
] satisfies RouteConfig;
