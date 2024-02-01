<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode"> <slot></slot></router-link>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style lang="scss" coped>
.basicBtn {
  background-color: transparent;
  border: 1px solid #e67e22;
  color: #e67e22;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  font-family: "DM Sans", sans-serif;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: 0.3s;
  &.active,
  &:hover {
    color: #fff;
    background-color: #e67e22;
  }
}
.homeLink {
  color: #222 !important;
  transition: 0.3s;
  &:hover {
    color: #e67e22 !important;
    text-decoration: none;
  }
}
</style>
