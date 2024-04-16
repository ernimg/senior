<template>
  <h3>Ostatnie wydarzenia</h3>
  <div class="news_wrapper">
    <news-item
      v-for="news in NewsItems"
      :key="news.id"
      :id="news.id"
      :title="news.title"
      :description="news.description"
      :publish-date="news.publishDate"
      :img="news.images[0]"
    ></news-item>
  </div>
</template>
<script setup>
import NewsItem from "../ListItem/NewsItem.vue";
import { computed } from "vue";
import { useNewsStore } from "@/Store/news";

const newsStore = useNewsStore();
const NewsItems = computed(() => {
  // newsStore.loadNews();
  return newsStore.getNews;
});
</script>
<style lang="scss" scoped>
.news_wrapper {
  display: flex;
}
</style>
