<template>
  <div class="donate-form">
    <div class="donate-form__thanks" v-if="donated">
      <h1 class="donate-form__thanks-caption">Thank you for your help!</h1>

      <button class="donate-form__button" @click="again">Donate again!</button>
    </div>
    <template v-else>
      <input
        class="donate-form__name"
        type="text"
        placeholder="Name (optional)"
        v-model="value.name"
      />
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

      <div class="donate-form__errors">
        <div
          class="donate-form__error"
          v-for="(error, e) in errors"
          :key="`donate_form_error_${e}`"
        >
          {{ error }}
        </div>
      </div>

      <button class="donate-form__button" @click="donate">Donate</button>

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
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      value: {
        amount: 40,
        currency: BASE_CURRENCY,
        name: "",
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
    again() {
      this.$emit("again");
    },
  },
};
</script>

<style lang="scss">
.donate-form {
  @apply relative w-96 mt-8 ml-auto mr-auto p-6 border-2 border-dotted border-blue-600;
  &__thanks {
    @apply text-center;
  }
  &__name {
    @apply block w-full h-12 mb-8 pl-4 pr-4 border-solid border-blue-400 border-2;
  }
  &__suggestions {
    @apply flex flex-wrap mb-8;
  }
  &__error {
    @apply mt-1 text-xs text-red-500;
  }
  &__button {
    @apply flex items-center justify-center w-full h-10 mt-8 p-4 border-dotted text-blue-800 border-blue-400 border transition-all hover:text-white hover:bg-blue-400 hover:border-white;
  }
  &__loading {
    @apply absolute w-full h-full top-0 left-0 bg-white opacity-0 invisible transition-all;
    &--active {
      @apply opacity-60 visible;
    }
  }
  &__thanks-caption {
    @apply mb-8;
  }
}
</style>
