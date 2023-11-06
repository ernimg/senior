<template>
  <section>
    <nav>
      <h2>Aktualnie u nas</h2>
      <button @click="setActiveTab('short-news')">Aktualnie</button>
      <button @click="setActiveTab('rehablilitation-list')">
        Rechabilitacja
      </button>
    </nav>
    <component :is="activeTab"> </component>
  </section>
</template>
<script>
import { ref } from "vue";
import ShortNews from "./ShortNews.vue";
import RehablilitationList from "./RehablilitationList.vue";
export default {
  components: {
    ShortNews,
    RehablilitationList,
  },
  setup() {
    const activeTab = ref("short-news");
    function setActiveTab(val) {
      activeTab.value = val;
    }
    return { activeTab, setActiveTab };
  },
};
</script>
