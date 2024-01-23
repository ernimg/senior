<template>
  <router-link
    class="item gts col-12 col-md-6 col-lg-4 image_wrapp"
    :style="{ backgroundImage: 'url(' + url + ')' }"
    :to="imgId"
  ></router-link>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  props: ["id", "url", "title"],
  setup(props) {
    const route = useRoute();
    const imgId = computed(() => {
      return route.path + "/" + props.id;
    });
    return {
      imgId,
    };
  },
};
</script>
<style lang="scss" scoped>
.image_wrapp {
  position: relative;
  overflow: hidden;
  height: 30.1rem;
  width: 30.1rem;
  margin: 1.2rem auto;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
