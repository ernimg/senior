import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./Pages/MainPage.vue";
import TheNews from "./Pages/TheNews.vue";
import TheContact from "./Pages/TheContact.vue";
import TheGallery from "./Pages/TheGallery.vue";
import EventCalendar from "./Pages/EventCalendar.vue";
import NewsDetails from "./Components/NewsDetails.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/mainPage" },
    { path: "/mainPage", component: MainPage },
    { path: "/news", component: TheNews },
    { path: "/news/:newsId", component: NewsDetails, props: true },
    { path: "/eventCalendar", component: EventCalendar },
    { path: "/gallery", component: TheGallery },
    { path: "/contact", component: TheContact },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
