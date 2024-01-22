<template>
  <div>ok</div>
  <img :src="loadImg" alt="" />
</template>
<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["imgId"],
  setup(props) {
    const store = useStore();
    let imgIndex = ref(null);
    const loadImg = computed(() => {
      let url;
      for (const x in store.getters["Galery/getPicturest"][imgIndex.value]) {
        if (x === "url") {
          url = store.getters["Galery/getPicturest"][imgIndex.value][x];
        }
      }
      return url;
    });
    function fingIndex() {
      for (let key in store.getters["Galery/getPicturest"]) {
        if (store.getters["Galery/getPicturest"][key].id === props.imgId)
          imgIndex.value = key;
      }
    }
    onMounted(fingIndex);
    return { imgIndex, fingIndex, loadImg };
  },
};
</script>
