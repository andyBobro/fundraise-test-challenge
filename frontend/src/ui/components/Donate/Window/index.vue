<template>
  <VueDragResize
    :snapToGrid="true"
    :gridX="10"
    :gridY="10"
    :w="win.width"
    :h="win.height"
    :x="win.x"
    :y="win.y"
  >
    <div class="window">
      <Header />
      <div class="window__content">
        {{ win.title }}
      </div>
    </div>
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import Header from "./Header.vue";

export default {
  name: "Window",
  components: {
    VueDragResize,
    Header,
  },
  props: {
    win: {
      type: Object,
      required: true,
      valudator(val) {
        return !!val["id"];
      },
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.window {
  @apply border border-solid border-opacity-60 border-gray-700;
}
</style>