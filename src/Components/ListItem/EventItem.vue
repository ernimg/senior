<template>
  <li>
    <header>
      {{ eTitle }}
    </header>
    <div>
      <span>{{ eDate }}</span>
      <span>{{ eMail }}</span>
      <span>{{ ePhone }}</span>
    </div>
  </li>
</template>
<script>
export default {
  props: ["eTitle", "eDate", "eMail", "ePhone"],
};
</script>
<style scoped>
span {
  margin: 1rem;
}
</style>
