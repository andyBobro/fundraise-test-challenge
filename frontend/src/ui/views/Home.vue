<template>
  <div class="home">
    <h1>Home</h1>
    <img alt="Vue logo" :src="require('assets/logo.png')" />
  </div>
</template>

<script>
// import logo from "assets/logo.png";

export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  @apply pt-48 text-center;
  img {
    @apply inline-block;
  }
}
</style>
