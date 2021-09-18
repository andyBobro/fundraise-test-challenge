<template>
  <div class="input-select">
    <select name="" id="" class="input-select__input" @change="onChange">
      <option
        v-for="option in options"
        :key="`option_${option.value}`"
        class="input-select__option"
        :value="option.value"
        :selected="selected === option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  props: {
    selected: {
      type: String,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss">
.input-select {
  @apply relative h-full;
  &__input {
    @apply block w-full border-l-2 border-blue-200 border-dotted h-full text-xs text-gray-800 pt-2 pr-3 pb-2 pl-4 rounded-md border-0 focus:outline-none;
  }
}
</style>
