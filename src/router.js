import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
// Notare che ciò che metto in views è ciò che è raggiungibile tramite url, il resto è in components
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/uomo",
      name: "uomo",
      component: () => import("./views/Uomo.vue")
    },
    {
      path: "/donna",
      name: "donna",
      component: () => import("./views/Donna.vue")
    },
    {
      path: "/accessori",
      name: "accessori",
      component: () => import("./views/Accessori.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/who",
      name: "who",
      component: () => import("./views/Who.vue")
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("./views/Details.vue")
    },
    {
      path: "/adidas",
      name: "adidas",
      component: () => import("./views/Adidas.vue")
    }
  ]
});
