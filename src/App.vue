<template>
  <the-header></the-header>
  <RouterView></RouterView>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./Components/Layout/TheHeader.vue";
import TheFooter from "./Components/Layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
