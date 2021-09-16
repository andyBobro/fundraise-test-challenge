<template>
  <nav class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/desktop">Desktop</router-link> |
    <router-link to="/feed">Crypto Feed</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.nav {
  @apply fixed top-6 left-6 p-3 bg-white shadow-xl;
}
</style>