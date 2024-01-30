import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./Pages/MainPage.vue";
import TheNews from "./Pages/TheNews.vue";
import TheContact from "./Pages/TheContact.vue";
import TheGallery from "./Pages/TheGallery.vue";
import EventCalendar from "./Pages/EventCalendar.vue";
import NewsDetails from "./Components/NewsDetails.vue";
import UserAuth from "./Pages/Auth/UserAuth.vue";
import AddPost from "./Components/Admin/AddPost.vue";
// import GalleryDetails from "./Components/GalleryDetails.vue";
import store from "./Store/index.js";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/mainPage" },
    { path: "/mainPage", component: MainPage },
    { path: "/news", component: TheNews },
    { path: "/news/:newsId", component: NewsDetails, props: true },
    { path: "/eventCalendar", component: EventCalendar },
    { path: "/gallery", component: TheGallery },
    // { path: "/gallery/:imgId", component: GalleryDetails, props: true },
    { path: "/contact", component: TheContact },
    { path: "/auth", component: UserAuth },
    { path: "/admin", component: AddPost, meta: { requiresAuth: true } },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth) {
    store.getters["Auth/isAuthenticated"] ? next() : next({ path: "/auth" });
  } else {
    next();
  }
});

export default router;
