<template>
  <div>
    <h2>{{ printTitle }}</h2>
  </div>
  <article>
    <img :src="pirntImg[0]" alt="img" />
    <p>{{ printDescription }}</p>
  </article>
  <aside>
    <img v-for="img in pirntImg.slice(1)" :src="img" alt="img" :key="img" />
  </aside>
  <footer>
    <span>
      <span>{{ printPublishDateTime }}</span>
      <p>{{ printAuthor }}</p>
    </span>
  </footer>
</template>
<script>
import { computed } from "vue";
import { useNewsStore } from "@/Store/news";

export default {
  props: ["newsId"],

  setup(props) {
    const newsStore = useNewsStore();
    const selectedNenws = computed(() => {
      return newsStore.getNews.find((news) => news.id === props.newsId);
    });
    const printTitle = computed(() => {
      return selectedNenws.value.title;
    });
    const printDescription = computed(() => {
      return selectedNenws.value.description;
    });
    const printPublishDateTime = computed(() => {
      return selectedNenws.value.publishDate;
    });
    const printAuthor = computed(() => {
      return selectedNenws.value.author;
    });
    const pirntImg = computed(() => {
      return selectedNenws.value.images;
    });
    return {
      printTitle,
      printDescription,
      printPublishDateTime,
      printAuthor,
      pirntImg,
    };
  },
};
</script>
