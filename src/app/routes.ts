import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("inventory", "src/pages/inventoryPage/InventoryPage.tsx"),
] satisfies RouteConfig;
