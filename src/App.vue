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
/* @import "Assets/styles/index.scss"; */
/* 
font-family: 'DM Sans', sans-serif;
font-family: 'Roboto', sans-serif;

*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-family: "Roboto", sans-serif;
}
main {
  margin-top: 6.7rem;
  overflow-x: hidden;
}
</style>
