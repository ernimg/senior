<template>
  <section class="gallery">
    <div class="gallery_container">
      <div class="carousel">
        <picture>
          <img :src="loadImg" alt="image" />
        </picture>
      </div>
      <div class="controls">
        <button @click="hangeIndex('decrement')">
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button @click="hangeIndex('incement')">
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  props: ["imgId"],
  setup(props) {
    const store = useStore();
    let imgIndex = ref(null);

    const loadImg = computed(() => {
      // fingIndex();
      let url;
      for (const x in store.getters["Galery/getPicturest"][imgIndex.value]) {
        if (x === "url") {
          url = store.getters["Galery/getPicturest"][imgIndex.value][x];
        }
      }
      return url;
    });
    function findIndex() {
      for (let key in store.getters["Galery/getPicturest"]) {
        if (store.getters["Galery/getPicturest"][key].id === props.imgId)
          imgIndex.value = parseInt(key);
      }
    }

    function hangeIndex(val) {
      const lengthImagestore = Object.keys(
        store.getters["Galery/getPicturest"]
      ).length;
      if (imgIndex.value < lengthImagestore - 1) {
        val === "incement" ? (imgIndex.value += 1) : null;
      }
      if (imgIndex.value != 0) {
        val === "decrement" ? (imgIndex.value -= 1) : null;
      }
      console.log(imgIndex.value);
    }
    onMounted(findIndex);
    return { imgIndex, findIndex, loadImg, hangeIndex };
  },
};
</script>
<style lang="scss" scoped>
button {
  width: 5rem;
  height: 5rem;
  text-align: center;
}
</style>
