<template>
  <div class="donate-form">
    <h1 class="donate-form__thanks" v-if="donated">Thank you for your help!</h1>
    <template v-else>
      <div class="donate-form__suggestions">
        <Suggestion
          v-for="sug in currentSuggestions"
          :isActive="value.amount === sug"
          :value="sug"
          @select="onSuggest"
          :key="`suggestion_${sug}`"
        >
          {{ currencies[value.currency].symbol }} {{ sug }}
        </Suggestion>
      </div>

      <InputAmount v-model="value" />

      <button class="donate-form__submit" @click="donate">Donate</button>

      <div
        :class="[
          'donate-form__loading',
          {
            'donate-form__loading--active': !rates,
          },
        ]"
      ></div>
    </template>
  </div>
</template>

<script>
import { BASE_CURRENCY, currencies } from "utils/constants";
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
      default() {
        return null;
      },
    },
    donated: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: {
        amount: 40,
        currency: BASE_CURRENCY,
      },
      defaultSuggestions: [40, 100, 200, 1000, 2500, 5000],
      currencies,
      base: BASE_CURRENCY,
    };
  },
  computed: {
    currentSuggestions() {
      if (this.value.currency === this.base) {
        return this.defaultSuggestions;
      }

      return this.convertSuggestions(this.value.currency);
    },
  },
  methods: {
    onSuggest(e) {
      this.value.amount = e;
    },
    convertSuggestions(currency) {
      const newSuggs = this.defaultSuggestions.map((suggestion) => {
        const k = suggestion > 1000 ? 100 : 10;
        const sug =
          Math.round((suggestion * this.rates.rates[currency]) / k) * k;

        return sug;
      });

      return newSuggs;
    },
    donate() {
      this.$emit("donate", this.value);
    },
  },
};
</script>

<style lang="scss">
.donate-form {
  @apply relative w-96 ml-auto mr-auto p-6 border-2 border-dotted border-blue-600;
  &__thanks {
    @apply text-center;
  }
  &__suggestions {
    @apply flex flex-wrap mb-8;
  }
  &__submit {
    @apply flex items-center justify-center w-full h-10 p-4 border-dotted text-blue-800 border-blue-400 border transition-all hover:text-white hover:bg-blue-400 hover:border-white;
  }
  &__loading {
    @apply absolute w-full h-full top-0 left-0 bg-white opacity-0 invisible transition-all;
    &--active {
      @apply opacity-60 visible;
    }
  }
}
</style>