<template>
  <dialog class="dialog" open>
    <div class="img" :style="{ backgroundImage: 'url(' + loadImg + ')' }"></div>

    <button class="close" @click="closeGallery">
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
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>

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
  </dialog>
</template>
<script>
import { ref, computed, onMounted } from "vue";
export default {
  props: ["imgId", "imageCollection"],
  emit: ["closeGallery"],
  setup(props, context) {
    let imgIndex = ref(null);
    const loadImg = computed(() => {
      let url;
      const gallery = props.imageCollection;
      for (const x in gallery[imgIndex.value]) {
        if (x === "url") {
          url = gallery[imgIndex.value][x];
        }
      }
      return url;
    });
    function findIndex() {
      const gallery = props.imageCollection;
      for (let key in gallery) {
        if (gallery[key].id === props.imgId) imgIndex.value = parseInt(key);
      }
    }

    function hangeIndex(val) {
      const lengthImagestore = Object.keys(props.imageCollection).length;

      if (imgIndex.value < lengthImagestore - 1) {
        val === "incement" ? (imgIndex.value += 1) : null;
      }
      if (imgIndex.value != 0) {
        val === "decrement" ? (imgIndex.value -= 1) : null;
      }
    }
    function closeGallery() {
      context.emit("close", "close");
    }
    onMounted(findIndex);
    return { imgIndex, findIndex, loadImg, hangeIndex, closeGallery };
  },
};
</script>
<style lang="scss" scoped>
$size-width: 400px;
$size-height: 300px;

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: oklch(0 0 0 / 0.4);
  backdrop-filter: blur(25px);
  z-index: 5;
  &_container {
    overflow: hidden;
  }
}
.carousel-container {
  padding: 0.4rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.controls {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #000;
  padding: 0.8rem 1.2rem;
  z-index: 1;
}
.close {
  position: fixed;
  right: 3%;
  top: 3%;
}
.img {
  width: 100vw;
  height: 100vw;
  background-size: cover;
  background-position: center;
}
</style>
