<template>
  <main>
    <about-us></about-us>
    <quick-summary></quick-summary>
    <the-create></the-create>
  </main>
</template>
<script>
import AboutUs from "@/Components/MainPage/AboutUs.vue";
import QuickSummary from "@/Components/MainPage/QuickSummary.vue";
import TheCreate from "@/Components/MainPage/TheCreate.vue";

export default {
  components: {
    AboutUs,
    QuickSummary,
    TheCreate,
  },
};
</script>
