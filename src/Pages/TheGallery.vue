<template>
  <section class="container">
    <the-heading>
      <template #localization>{{ path }}</template>
      <template #default>Galeria Zdjęć</template>
      <template #description> </template>
    </the-heading>
    <base-button mode="basicBtn" @click="loadGallery">
      <font-awesome-icon icon="fa-solid fa-rotate-right"
    /></base-button>
    <base-spiner v-if="isLoading"></base-spiner>
    <div v-else-if="!isImages && !isLoading">
      <h3>Brak treści ...</h3>
      <p>
        Nie przejmuj się pracujemy nad tym aby ta zakładka nie była pusta :D.
      </p>
    </div>
    <div class="row text-center justify-content-around" v-else>
      <gallery-items
        v-for="imgae in imagagesItem"
        :key="imgae.id"
        :id="imgae.id"
        :url="imgae.url"
        :title="imgae.title"
        @selectImg="setSelectedImg"
      >
      </gallery-items>
    </div>
    <gallery-details
      v-if="selectedImage"
      :img-id="selectedImage"
      :image-collection="imagagesItem"
      @close="closeGalleryDialog"
    ></gallery-details>
  </section>
</template>
<script>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import TheHeading from "@/Components/Layout/TheHeading.vue";
import GalleryItems from "@/Components/ListItem/GalleryItems.vue";
import GalleryDetails from "@/Components/GalleryDetails.vue";
export default {
  components: {
    TheHeading,
    GalleryItems,
    GalleryDetails,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const route = useRoute();
    const selectedImage = ref("");

    const path = computed(() => {
      return route.path;
    });
    const imagagesItem = computed(() => {
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
    function setSelectedImg(val) {
      selectedImage.value = val;
    }
    function closeGalleryDialog(val) {
      val === "close" ? (selectedImage.value = "") : null;
    }
    onMounted(loadGallery);
    return {
      imagagesItem,
      isImages,
      loadGallery,
      isLoading,
      path,
      setSelectedImg,
      selectedImage,
      closeGalleryDialog,
    };
  },
};
</script>
