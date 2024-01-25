<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode"></router-link>
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
<style coped>
.basicBtn {
  background-color: transparent;
  border: 1px solid #e67e22;
  color: #e67e22;
  font-size: 1.4rem;
  padding: 1.2rem 0.8rem;
  font-family: "DM Sans", sans-serif;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: 0.3s;
  &.active,
  &:hover {
    color: #fff;
    background-color: #e67e22;
  }
}

.main-nav-link.nav-cta:link,
.main-nav-link.nav-cta:visited {
  padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: #fff;
  background-color: #e67e22;
}

.main-nav-link.nav-cta:hover,
.main-nav-link.nav-cta:active {
  background-color: #f19000;
}
</style>
