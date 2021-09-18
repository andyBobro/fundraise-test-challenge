<template>
  <div class="donate-form">
    <div class="donate-form__suggestions">
      <Suggestion
        v-for="sug in currentSuggestions"
        :isActive="value.amount === sug"
        :value="sug"
        @select="onSuggest"
        :key="`suggestion_${sug}`"
      />
    </div>

    <InputAmount v-model="value" />

    <button class="donate-form__submit">Donate</button>
  </div>
</template>

<script>
import { BASE_CURRENCY, SUPPORTED_CURRENCIES } from "utils/constants";
import InputAmount from "ui/components/common/InputAmount";
import Suggestion from "./Suggestion.vue";

export default {
  name: "DonateForm",
  components: {
    InputAmount,
    Suggestion,
  },
  props: {
    rates: {
      type: Object,
    },
  },
  data() {
    return {
      value: {
        amount: 40,
        currency: BASE_CURRENCY,
      },
      defaultSuggestions: [40, 100, 200, 1000, 2500, 5000],
      currencies: SUPPORTED_CURRENCIES,
      base: BASE_CURRENCY,
    };
  },
  computed: {
    currentSuggestions() {
      return this.defaultSuggestions;
    },
  },
  methods: {
    onSuggest(e) {
      this.value.amount = e;
    },
    onInputChange(e) {
      this.value = e;
    },
  },
  watch: {
    value: {
      deep: true,
      handler(newVal) {
        console.log(newVal);
      },
    },
  },
};
</script>

<style lang="scss">
.donate-form {
  @apply w-96 ml-auto mr-auto p-6 border-2 border-dotted border-blue-600;
  &__suggestions {
    @apply flex flex-wrap mb-8;
  }
  &__submit {
    @apply flex items-center justify-center w-full h-10 p-4 border-dotted text-blue-800 border-blue-400 border transition-all hover:text-white hover:bg-blue-400 hover:border-white;
  }
}
</style>