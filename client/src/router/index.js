import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutMe from "../views/AboutMe.vue";
import PageNotFound from "../views/404.vue";
import Blog from "../components/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  // mode: "history",
  routes: routes,
});

export default router;
