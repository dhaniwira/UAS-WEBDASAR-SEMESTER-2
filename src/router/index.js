import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/menu", name: "Menu", component: Menu },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
