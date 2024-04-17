import { ref } from "vue";
import { useNewsStore } from "@/Store/news";

export default function useNewsLoader() {
  const isLoading = ref(false);

  async function loadNews(refresh = false) {
    isLoading.value = true;
    try {
      await useNewsStore().loadNews({ foreceRefresh: refresh });
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  return { isLoading, loadNews };
}
