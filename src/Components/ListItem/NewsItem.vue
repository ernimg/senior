<template>
  <base-container>
    <li>
      <div class="news__header">
        <h3>{{ title }}</h3>
        <span>{{ publishDate }}</span>
      </div>
      <router-link :to="newsIdUrl"> Zobacz więcej </router-link>
      <button v-if="isAuth" @click="removeNews(id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </li>
  </base-container>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  props: ["id", "title", "publishDate"],
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
<style scoped>
.news__header {
  display: flex;
  justify-content: space-between;
}
button {
  width: 1.6rem;
  height: 1.6rem;
  margin: 1rem;
}
</style>
