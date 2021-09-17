<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <Logo />
    <router-link to="/donate">Donate</router-link>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "Nav",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  @apply absolute w-full top-0 flex items-center justify-center;
}
</style>
