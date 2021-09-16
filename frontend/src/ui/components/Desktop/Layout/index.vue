<template>
  <section class="layout">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style lang="scss">
.layout {
  @apply relative w-screen h-screen overflow-hidden;
}
</style>