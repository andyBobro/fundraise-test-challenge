<template>
  <input
    class="input-sum"
    type="text"
    :value="value"
    @input="onInput"
    @keydown="onKeydown"
  />
</template>

<script>
const controlChars = ["a", "c", "x", "v", "r"];

export default {
  name: "InputSum",
  prop: ["value"],
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", +e.target.value);
    },
    onKeydown(e) {
      if (this.shouldPrevent(e)) {
        e.preventDefault();
      }
    },
    shouldPrevent(e) {
      return !(/^[0-9]*$/g.test(e.key) || this.isControlling(e));
    },
    isControlling(e) {
      if (controlChars.includes(e.key.toLowerCase()) && e.ctrlKey) {
        return true;
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
.input-sum {
  @apply block w-full h-full pl-4 pr-4 border-0 shadow-none focus:outline-none;
}
</style>
