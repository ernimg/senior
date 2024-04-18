<template>
  <section>
    <the-heading>
      <template #localization>{{ path }}</template>
      <template #default>Aktualnośći</template>
      <template #description> </template>
    </the-heading>
    <div class="row">
      <div class="col-12">
        <base-button mode="basicBtn" @click="loadNews(true)">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </base-button>
        <base-spiner v-if="isLoading"></base-spiner>
        <div v-else-if="!isNews && !isLoading">
          <h3>Brak treści ...</h3>
          <p>
            Nie przejmuj się pracujemy nad tym aby ta zakładka nie była pusta
            :D.
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
            :img="news.images[0]"
            @rm-wews="remove"
          ></news-item>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsItem from "@/Components/ListItem/NewsItem.vue";
import TheHeading from "@/Components/Layout/TheHeading.vue";
import { computed, onMounted } from "vue";

import { useRoute } from "vue-router";
import { useNewsStore } from "@/Store/news";
import useNewsLoader from "@/Components/hooks/loadNews";
const newsStore = useNewsStore();
// const isLoading = ref(false);
const route = useRoute();
const path = computed(() => {
  return route.path;
});
const NewsItems = computed(() => {
  return newsStore.getNews;
});

const isNews = computed(() => {
  return newsStore.isNews;
});

const remove = (param) => {
  newsStore.rmNews(param);
};
const { isLoading, loadNews } = useNewsLoader();
onMounted(loadNews);
</script>
<style lang="scss">
.news__list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  margin: 6.4rem 0;
  padding-left: 0;
}
</style>
