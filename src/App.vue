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
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
/* f
font-family: 'Roboto', sans-serif; */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
}
</style>
