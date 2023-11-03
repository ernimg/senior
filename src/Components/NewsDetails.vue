<template>
  <div>
    <h2>{{ printTitle }}</h2>
  </div>
  <article>
    <p>{{ printDescription }}</p>
  </article>
  <footer>
    <span>
      <span>{{ printPublishDateTime }}</span>
      <p>{{ printAuthor }}</p>
    </span>
  </footer>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["newsId"],
  // state() {
  //   return {
  //     selectedNenws: null,
  //   };
  // },
  setup(props) {
    const store = useStore();
    const selectedNenws = computed(() => {
      return store.getters["News/getNews"].find(
        (news) => news.id === props.newsId
      );
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
    return { printTitle, printDescription, printPublishDateTime, printAuthor };
  },
};
</script>
