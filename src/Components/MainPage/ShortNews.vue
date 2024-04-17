<template>
  <base-spiner v-if="isLoading"></base-spiner>
  <div v-else>
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
  </div>
</template>
<script setup>
import NewsItem from "../ListItem/NewsItem.vue";
import { computed, onMounted } from "vue";
import { useNewsStore } from "@/Store/news";
import useNewsLoader from "@/Components/hooks/loadNews";
const newsStore = useNewsStore();
const NewsItems = computed(() => {
  return newsStore.getNews;
});
const { isLoading, loadNews } = useNewsLoader();
onMounted(loadNews);
</script>
<style lang="scss" scoped>
.news_wrapper {
  display: flex;
  justify-content: space-between;
  margin: rem 0;
}
</style>
