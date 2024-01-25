<template>
  <section>
    <the-heading>
      <template #localization></template>
      <template #default>Aktualnie u nas</template>
      <template #description> </template>
    </the-heading>
    <div>
      <base-button
        mode="basicBtn"
        :class="{ active: activeTab === 'short-news' }"
        @click="setActiveTab('short-news')"
        >Aktualnie</base-button
      >
      <base-button
        mode="basicBtn"
        :class="{ active: activeTab === 'rehablilitation-list' }"
        @click="setActiveTab('rehablilitation-list')"
      >
        Rechabilitacja
      </base-button>
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
<!-- HTML !-->
