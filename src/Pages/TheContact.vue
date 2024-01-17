<template>
  <the-heading>
    <template #localization>{{ path }}</template>
    <template #default>Kontakt</template>
    <template #description> </template>
  </the-heading>
</template>
<script>
import { computed } from "vue";
import TheHeading from "@/Components/Layout/TheHeading.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    TheHeading,
  },
  setup() {
    const route = useRoute();
    const path = computed(() => {
      return route.path;
    });
    return { path };
  },
};
</script>
