<template>
  <section>
    <the-heading>
      <template #localization></template>
      <template #default>Aktualnie u nas</template>
      <template #description> </template>
    </the-heading>
    <div>
      <button @click="setActiveTab('short-news')">Aktualnie</button>
      <button @click="setActiveTab('rehablilitation-list')">
        Rechabilitacja
      </button>
    </div>
    <component :is="activeTab"> </component>
  </section>
</template>
<script>
import { ref } from "vue";
import ShortNews from "./ShortNews.vue";
import RehablilitationList from "./RehablilitationList.vue";
import TheHeading from "../Layout/TheHeading.vue";
export default {
  components: {
    ShortNews,
    RehablilitationList,
    TheHeading,
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
