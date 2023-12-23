<template>
  <section class="news">
    <button @click="loadNews(true)">Refresh</button>
    <div class="news__header">
      <h2>Aktualności</h2>
    </div>
    <div v-if="!isNews">
      <h3>Brak treści ...</h3>
      <p>
        Nie przejmuj się pracujemy nad tym aby ta zakładka nie była pusta :D.
      </p>
    </div>
    <ul v-else class="news__list">
      <news-item
        v-for="news in NewsItems"
        :key="news.id"
        :id="news.id"
        :title="news.title"
        :description="news.description"
        :publish-date="news.publishDate"
        @rm-wews="remove"
      ></news-item>
    </ul>
  </section>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import NewsItem from "../Components/ListItem/NewsItem.vue";
export default {
  components: {
    NewsItem,
  },
  setup() {
    const store = useStore();
    const NewsItems = computed(() => {
      return store.getters["News/getNews"];
    });
    const isNews = computed(() => {
      return store.getters["News/isNews"];
    });
    function remove(param) {
      store.dispatch("News/rmNews", param);
    }
    async function loadNews(refresh = false) {
      try {
        await store.dispatch("News/loadNews", {
          foreceRefresh: refresh,
        });
      } catch (error) {
        console.log(error);
      }
    }
    onMounted(loadNews);
    return { NewsItems, isNews, remove, loadNews };
  },
};
</script>
