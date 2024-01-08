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
html {
  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;
  overflow-x: hidden;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}
</style>
