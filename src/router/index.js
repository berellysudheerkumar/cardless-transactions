import { createWebHistory, createRouter } from "vue-router";
import AppScreen from "@/views/AppScreen";
import ATMScreen from "@/views/ATMScreen";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;