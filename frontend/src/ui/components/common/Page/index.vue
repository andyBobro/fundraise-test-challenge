<template>
  <main class="page">
    <slot />
  </main>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style lang="scss" scoped>
.page {
  @apply relative w-full min-h-screen pt-24;
}
</style>