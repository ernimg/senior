<template>
  <base-spiner v-if="isLoading"></base-spiner>
  <section v-else>
    <h3>Ostatnie wydarzenia</h3>
    <ul class="news__list">
      <news-item
        v-for="news in sortedNews"
        :key="news.id"
        :id="news.id"
        :title="news.title"
        :description="news.description"
        :publish-date="news.publishDate"
        :img="news.images[0]"
      ></news-item>
    </ul>
  </section>
</template>
<script setup>
import NewsItem from "../ListItem/NewsItem.vue";
import { computed, onMounted } from "vue";
import { useNewsStore } from "@/Store/news";
import useNewsLoader from "@/Components/hooks/loadNews";
const newsStore = useNewsStore();

const sortedNews = computed(() => {
  return newsStore.getNews
    .slice()
    .sort((a, b) => {
      return new Date(b.publishDate) - new Date(a.publishDate);
    })
    .slice(0, 3);
});
const { isLoading, loadNews } = useNewsLoader();
onMounted(loadNews);
</script>
