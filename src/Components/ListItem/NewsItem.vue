<template>
  <div class="card">
    <div class="news__header">
      <img
        class="news__header-img"
        :src="img"
        alt="zdjęcie z nagłówka wydarzeń"
      />
      <h3 class="news__header-title">{{ title }}</h3>
    </div>
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio
      quidem possimus laudantium architecto. Hic numquam necessitatibus possimus
      quos provident! Dolor dolorum provident porro. Qui maiores a unde debitis
      esse?
    </p>
    <base-button link mode="basicBtn" :to="newsIdUrl"
      >Zobacz więcej</base-button
    >
    <button v-if="isAuth" @click="removeNews(id)">
      <font-awesome-icon icon="fa-solid fa-trash" />
    </button>
    <span class="date">{{ publishDate }}</span>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  props: ["id", "title", "publishDate", "img"],
  setup(props, context) {
    const route = useRoute();
    const store = useStore();
    const newsIdUrl = computed(() => {
      return route.path + "/" + props.id;
    });
    const isAuth = computed(() => {
      return store.getters["Auth/isAuthenticated"];
    });
    function removeNews(param) {
      context.emit("rm-wews", param);
    }
    return { newsIdUrl, removeNews, isAuth };
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  flex-basis: 45%;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.news__header {
  width: 100%;
  &-img {
    max-height: 25rem;
    width: 100%;
  }
  &-title {
    text-transform: uppercase;
    padding: 1.8rem 0.4rem;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    color: #222;
  }
}
.description {
  font-size: 1.2rem;
  padding: 0.8rem 0.4rem;
  text-align: left;
  line-height: 200%;
  letter-spacing: 0.1rem;
  color: #555;
}
.date {
  position: absolute;
  top: -3.7rem;
  right: 0;
  background-color: crimson;
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  padding: 0.8rem 0.4rem;
}
</style>
