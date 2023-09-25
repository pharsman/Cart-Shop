import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Inner from "@/pages/Inner.vue";
import Cart from "@/pages/Cart.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/inner", props: true, component: Inner },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
