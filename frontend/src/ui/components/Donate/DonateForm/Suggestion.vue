<template>
  <button
    @click="onSelect"
    :class="[
      'suggestion',
      {
        'suggestion--active': isActive,
      },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Suggestion",
  props: {
    value: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSelect() {
      this.$emit("select", this.value);
    },
  },
};
</script>

<style lang="scss">
.suggestion {
  @apply flex items-center justify-center w-1/3 p-3 border-dotted border-blue-400 border transition-all hover:shadow-lg;
  &--active {
    @apply text-white bg-blue-400 border-white;
  }
}
</style>
