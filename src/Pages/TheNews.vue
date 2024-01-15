<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary mb-3" @click="loadNews(true)">
          Refresh
        </button>
        <div class="news__header">
          <h2>Aktualności</h2>
        </div>
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
            @rm-wews="remove"
          ></news-item>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import NewsItem from "@/Components/ListItem/NewsItem.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isLoading = ref(false);
const NewsItems = computed(() => {
  return store.getters["News/getNews"];
});

const isNews = computed(() => {
  return store.getters["News/isNews"];
});

const remove = (param) => {
  store.dispatch("News/rmNews", param);
};

async function loadNews(refresh = false) {
  isLoading.value = true;
  try {
    await store.dispatch("News/loadNews", {
      foreceRefresh: refresh,
    });
  } catch (error) {
    console.log(error);
  }
  isLoading.value = false;
}
onMounted(loadNews);
</script>
