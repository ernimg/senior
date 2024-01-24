<template>
  <button
    @click="selectImg(id)"
    class="item gts col-12 col-md-6 col-lg-4 image_wrapp"
    :style="{ backgroundImage: 'url(' + url + ')' }"
  ></button>
</template>
<script>
export default {
  props: ["id", "url", "title"],
  emit: ["selectImg"],
  setup(_, contex) {
    function selectImg(val) {
      contex.emit("selectImg", val);
    }
    return {
      selectImg,
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
