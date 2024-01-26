<template>
  <div id="contetnt">
    <the-header></the-header>
    <main>
      <RouterView></RouterView>
    </main>
    <the-footer></the-footer>
  </div>
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
#contetnt {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  height: 100dvh;
  overflow-y: scroll;
}
html {
  font-size: 10px;
}
body {
  font-family: "Roboto", sans-serif;
}
main {
  margin-top: 6.7rem;
  min-height: 100dvh;
}
section {
  overflow: hidden;
}
</style>
