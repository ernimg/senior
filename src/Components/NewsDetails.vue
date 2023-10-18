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
export default {
  props: ["newsId"],
  state() {
    return {
      selectedNenws: null,
    };
  },

  computed: {
    printTitle() {
      return this.selectedNenws.title;
    },
    printDescription() {
      return this.selectedNenws.description;
    },
    printPublishDateTime() {
      return this.selectedNenws.publishDate;
    },
    printAuthor() {
      return this.selectedNenws.author;
    },
  },

  created() {
    this.selectedNenws = this.$store.getters["News/getNews"].find(
      (news) => news.id === this.newsId
    );
  },
};
</script>
