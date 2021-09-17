<template>
  <div class="donater">
    <div class="donater__col donater__date">
      {{ formatted.date }}
    </div>
    <div class="donater__col donater__name">
      {{ name }}
    </div>
    <div class="donater__col donater__amount">
      {{ formatted.amount }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Donater",
  props: {
    date: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    formatted() {
      return {
        date: this.date,
        amount: this.amount,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.donater {
  @apply flex items-center mb-4;
  &__col {
    @apply p-2 mr-2;
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
