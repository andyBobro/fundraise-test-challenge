<template>
  <div class="donater">
    <div class="donater__col donater__date">
      {{ formatted.date }}
    </div>
    <div class="donater__col donater__name">
      {{ formatted.name }}
    </div>
    <div class="donater__col donater__amount">
      {{ currencies[donater.currency].symbol }} {{ formatted.amount }}
    </div>
  </div>
</template>

<script>
import { currencies } from "utils/constants";
import { format } from "date-fns";

export default {
  name: "Donater",
  props: {
    donater: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currencies,
    };
  },
  computed: {
    formatted() {
      return {
        date: format(new Date(this.donater.date), "MMMM dd, yyyy"),
        name: this.donater.name,
        amount: `${this.donater.amount}`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.donater {
  @apply flex items-center mb-4;
  &__col {
    @apply p-2 mr-2 text-blue-600 text-left;
    &:last-child {
      @apply mr-0;
    }
  }
  &__date {
    @apply w-1/4;
  }
  &__name {
    @apply w-1/2;
  }
  &__amount {
    @apply w-1/4;
  }
}
</style>
