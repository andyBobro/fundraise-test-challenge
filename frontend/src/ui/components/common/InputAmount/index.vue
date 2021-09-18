<template>
  <div class="input-amount">
    <div class="input-amount__symbol">
      {{ currencies[selectedAmount.currency].symbol }}
    </div>
    <div class="input-amount__sum">
      <InputSum v-model="selectedAmount.amount" />
    </div>
    <div class="input-amount__select">
      <InputSelect
        :selected="selectedAmount.currency"
        :options="options"
        v-model="selectedAmount.currency"
      />
    </div>
  </div>
</template>

<script>
import { currencies, SUPPORTED_CURRENCIES } from "utils/constants";
import InputSelect from "./InputSelect.vue";
import InputSum from "./InputSum.vue";

export default {
  name: "InputAmount",
  components: {
    InputSum,
    InputSelect,
  },
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      selectedAmount: this.value,
      currencies,
      SUPPORTED_CURRENCIES,
    };
  },
  computed: {
    options() {
      return this.SUPPORTED_CURRENCIES.map((code) => ({
        value: code,
        label: code,
      }));
    },
  },
  watch: {
    selectedAmount: {
      deep: true,
      handler(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
};
</script>

<style lang="scss">
.input-amount {
  @apply flex h-12 mb-8 border-solid border-blue-400 border-2;
  &__symbol {
    @apply flex items-center justify-center w-12 text-blue-600 text-2xl border-r-2 border-blue-200 border-dotted;
  }
  &__sum {
    @apply flex-grow flex-shrink-0;
  }
  &__select {
    @apply w-24;
  }
}
</style>