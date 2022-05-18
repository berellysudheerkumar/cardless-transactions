import { createWebHistory, createRouter } from "vue-router";
import AppScreen from "@/views/AppScreen";
import ATMScreen from "@/views/ATMScreen";
import GetDetails from "@/views/GetDetails";

const routes = [
  {
    path: "/app",
    name: "AppScreen",
    component: AppScreen,
  },
  {
    path: "/atm",
    name: "ATMScreen",
    component: ATMScreen,
  },
  {
    path: "/getDetails",
    name: "GetDetails",
    component: GetDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;