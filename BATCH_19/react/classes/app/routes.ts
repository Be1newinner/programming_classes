import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/forms", "routes/forms_basic.tsx"),
    route("/forms_adavcned", "routes/forms_advance.tsx")
] satisfies RouteConfig;
