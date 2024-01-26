<template>
  <the-header></the-header>

  <main>
    <RouterView></RouterView>
  </main>
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
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,500;9..40,700&family=Roboto:wght@300;400;700&display=swap");
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
*/
/*
font-family: 'DM Sans', sans-serif;
font-family: 'Roboto', sans-serif;

*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
html {
  font-size: 10px;
}
body {
  font-family: "Roboto", sans-serif;
  -webkit-overflow-scrolling: touch;
}
main {
  margin-top: 6.7rem;
  min-height: 100dvh;
}
section {
  overflow: hidden;
}
</style>
