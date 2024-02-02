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
    <base-button link mode="basicBtn" :to="newsIdUrl" class="showMore"
      >Zobacz więcej</base-button
    >
    <button class="rm_btn" v-if="isAuth" @click="removeNews(id)">
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
  flex-basis: 90%;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  margin-bottom: 4.8rem;
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
  @media screen and (min-width: 640px) {
    flex-basis: 48%;
  }
  @media screen and (min-width: 1024px) {
    flex-basis: 31%;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: 23%;
  }
}
.news__header {
  width: 100%;
  &-img {
    height: 25rem;
    width: 100%;
    border-bottom: 1px solid #6f916f;
  }
  &-title {
    text-transform: uppercase;
    padding: 1.8rem 0.4rem;
    font-size: 2rem;
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
  &::before {
  }
}
.date {
  position: absolute;
  top: -3.7rem;
  right: 0;
  background-color: #6f916f;
  color: #fff;
  font-size: 1.4rem;
  text-align: center;
  padding: 0.8rem 0.4rem;
}
.showMore {
  border: unset;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
}
.rm_btn {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  font-size: 1.6rem;
  text-align: center;
  background: rgba(30, 30, 30, 0.6);
  color: #ccc;
  border: unset;
  transition: 0.3s;
  &:hover {
    color: #fff;
  }
}
</style>
