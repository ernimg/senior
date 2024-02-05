import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default function useNews() {
  const route = useRoute();
  const store = useStore();
  const isLoading = ref(false);
  const path = computed(() => {
    return route.path;
  });
  const NewsItems = computed(() => {
    return sortByDate(store.getters["News/getNews"]);
  });
  const sortByDate = (data) =>
    data.sort(({ publishDate: a }, { publishDate: b }) =>
      a > b ? -1 : a < b ? 1 : 0
    );
  const isNews = computed(() => {
    return store.getters["News/isNews"];
  });

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

  return {
    isLoading,
    path,
    NewsItems,
    isNews,

    loadNews,
  };
}
