<template>
  <main class="app-wrapper">
    <Nav />
    <router-view />
  </main>
</template>

<script>
import Nav from "ui/components/common/Nav/index.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" src="styles/globals/index.scss">
</style>
