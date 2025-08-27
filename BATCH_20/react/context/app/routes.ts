import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("contact", [
    index("routes/contact.tsx"),
    route("/:id", "routes/contactDetails.tsx"),
  ]),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
