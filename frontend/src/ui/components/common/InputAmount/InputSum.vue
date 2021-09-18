<template>
  <input class="input-sum" type="text" :value="value" @input="onInput" />
</template>

<script>
export default {
  name: "InputSum",
  prop: ["value"],
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      val: this.value,
      allowedKeys: [
        ...new Array(10).fill(0).map((item, num) => num.toString()),
        "Backspace",
        "ArrowRight",
        "ArrowLeft",
        "Delete",
        "Tab",
      ],
    };
  },
  methods: {
    onInput(e) {
      this.$emit("input", +e.target.value);
    },
  },
};
</script>

<style lang="scss">
.input-sum {
  @apply block w-full h-full pl-4 pr-4 border-0 shadow-none focus:outline-none;
}
</style>