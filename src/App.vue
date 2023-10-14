<template>
  <the-header></the-header>
  <RouterView></RouterView>
</template>

<script>
import TheHeader from './Components/Layout/TheHeader.vue';

export default {
components:{
  TheHeader,
}
}
</script>

