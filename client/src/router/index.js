import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutMe from "../views/AboutMe.vue";
import PageNotFound from "../views/404.vue";
import Blog from "../components/Blog.vue";
import ContactForm from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";
import ProjectDetail from "../views/ProjectDetail.vue";
import Cookies from "../views/Cookies.vue";

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
  {
    path: "/reach-me",
    name: "ContactForm",
    component: ContactForm,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/project/:id",
    name: "ProjectDetail",
    component: ProjectDetail,
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: Cookies,
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  // mode: "history",
  routes: routes,
});

export default router;
