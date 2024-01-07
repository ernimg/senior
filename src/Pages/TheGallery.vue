<template>
  <div>
    <h2>Galeria zdjęć</h2>
    <button @click="loadGallery">Refresh</button>
    <div v-if="!isImages">
      <h3>Brak treści ...</h3>
      <p>
        Nie przejmuj się pracujemy nad tym aby ta zakładka nie była pusta :D.
      </p>
    </div>
    <div v-else>
      <div v-for="image in ImagagesItem" :key="image.id">
        {{ image.title }}
        <img :src="image.url" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    console.log(store);
    const ImagagesItem = computed(() => {
      return store.getters["Galery/getPicturest"];
    });
    const isImages = computed(() => {
      return store.getters["Galery/existPicures"];
    });
    function loadGallery() {
      store.dispatch("Galery/loadGallery");
    }
    onMounted(loadGallery);
    return {
      ImagagesItem,
      isImages,
      loadGallery,
    };
  },
};
</script>
