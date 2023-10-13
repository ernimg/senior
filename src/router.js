import { createRouter, createWebHistory } from "vue-router";
import MainPage from './Pages/MainPage.vue';
import TheNews from './Pages/TheNews.vue';
import TheContact from './Pages/TheContact.vue';
import TheCreate from './Pages/TheCreate.vue';
import EventCalendar from './Pages/EventCalendar.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect:'/mainPage'},
        {path:"/mainPage", component:MainPage},
        {path:"/news", component:TheNews},
        {path:"/eventCalendar", component:EventCalendar},
        {path:"/create", component:TheCreate},
        {path:"/contact", component:TheContact},


    ]
});

export default router;