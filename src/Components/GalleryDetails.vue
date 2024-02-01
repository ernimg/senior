<template>
  <dialog class="dialog" open>
    <div class="img" :style="{ backgroundImage: 'url(' + loadImg + ')' }">
      <div class="img_counter">
        <span>{{ imgIndex + 1 }}</span
        ><span>/</span><span>{{ lengthCollection }}</span>
      </div>
    </div>

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
      <button :disabled="imgIndex === 0" @click="hangeIndex('decrement')">
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
      <button
        :disabled="lengthCollection - 1 === imgIndex"
        @click="hangeIndex('incement')"
      >
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
    const lengthCollection = computed(() => {
      return Object.keys(props.imageCollection).length;
    });
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
    return {
      imgIndex,
      findIndex,
      loadImg,
      hangeIndex,
      closeGallery,
      lengthCollection,
    };
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
button {
  background-color: unset;
  border: unset;
  padding: 0.8rem;
  text-align: center;
  background: rgba(30, 30, 30, 0.6);
  cursor: pointer;
  transition: 0.3s;
  svg {
    width: 4rem;
    height: 4rem;
    stroke: #ccc;
  }
  &:hover {
    svg {
      stroke: #fff;
    }
  }
}

.controls {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 0.4rem;
  z-index: 1;
}
.close {
  position: fixed;
  right: -9px;
  top: -6px;
  background-color: unset;
}
.img {
  position: relative;
  width: 100%;
  height: 56.6rem;
  max-width: 108rem;
  background-size: cover;
  background-position: center;
  &_counter {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    padding: 0.8rem 1.2rem;
    text-align: center;
    background: #e67e22;
    span {
      margin: 0.4rem;
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
}
</style>
