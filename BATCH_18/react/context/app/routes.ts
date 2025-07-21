import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // index("routes/First.tsx"),
  route("/", "routes/First.tsx"),
  route("/second", "routes/Second.tsx"),
  route("/third", "routes/Third.tsx"),
] satisfies RouteConfig;
