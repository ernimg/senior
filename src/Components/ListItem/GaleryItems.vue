<template>
  <div class="col col-xs-12 col-sm-6 col-md- col-xl-3 image_wrapp">
    <img :src="url" :alt="title" />
  </div>
</template>
<script>
export default {
  props: ["url", "title"],
  setup() {},
};
</script>
<style lang="scss" scoped>
.image_wrapp {
  margin: 1rem;
  overflow: hidden;
  max-height: 40rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
