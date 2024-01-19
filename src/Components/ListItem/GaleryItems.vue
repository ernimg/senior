<template>
  <div class="item gts col-12 col-md-6 col-lg-4 image_wrapp">
    <h3>{{ title }}</h3>
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
  overflow: hidden;
  max-height: 40rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
