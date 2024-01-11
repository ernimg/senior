<template>
  <div>
    <h2>Galeria zdjęć</h2>
    <button @click="loadGallery">Refresh</button>
    <base-spiner v-if="isLoading"></base-spiner>
    <div v-else-if="!isImages && !isLoading">
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
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    console.log(store);
    const ImagagesItem = computed(() => {
      return store.getters["Galery/getPicturest"];
    });
    const isImages = computed(() => {
      return store.getters["Galery/existPicures"];
    });
    async function loadGallery() {
      isLoading.value = true;
      try {
        await store.dispatch("Galery/loadGallery");
      } catch (error) {
        console.log(error);
      }
      isLoading.value = false;
    }
    onMounted(loadGallery);
    return {
      ImagagesItem,
      isImages,
      loadGallery,
      isLoading,
    };
  },
};
</script>
