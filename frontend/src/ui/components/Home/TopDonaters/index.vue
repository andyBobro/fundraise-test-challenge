<template>
  <div class="donaters">
    <h3 class="donaters__heading">Top donaters</h3>

    <h6 v-if="!donaters">There are no donates yet...</h6>

    <template v-else>
      <h6 v-if="!donaters.length">Loading...</h6>

      <div v-else class="donaters__list">
        <Donater
          v-for="donater in donaters"
          :key="donater._id"
          :donater="donater"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Donater from "./Donater.vue";
export default {
  name: "TopDonaters",
  props: {
    donaters: {
      type: [Array, Boolean],
      required: true,
    },
  },
  components: {
    Donater,
  },
};
</script>

<style lang="scss" scoped>
.donaters {
  @apply max-w-3xl ml-auto mr-auto mt-12 mb-8;
  &__heading {
    @apply mb-12;
  }
}
</style>
