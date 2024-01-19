<template>
  <div class="item gts col-lg-3 col-md-4 col-6 col-sm image_wrapp">
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
  margin: 1rem;
  overflow: hidden;
  max-height: 40rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
