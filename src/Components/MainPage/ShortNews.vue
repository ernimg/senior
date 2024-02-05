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
import { useStore } from "vuex";
const store = useStore();

const NewsItems = computed(() => {
  console.log(store.getters["News/getNews"]);

  return store.getters["News/getNews"];
});
</script>
<style lang="scss" scoped>
.news_wrapper {
  display: flex;
}
</style>
