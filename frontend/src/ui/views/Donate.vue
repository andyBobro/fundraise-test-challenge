<template>
  <div class="donate">
    <h3 class="donate__heading">Donate us and help pc gamers!</h3>
    <DonateForm :rates="rates" />
  </div>
</template>

<script>
import api from "utils/api";
import DonateForm from "ui/components/Donate/DonateForm";

export default {
  name: "Donate",
  data() {
    return {
      rates: null,
    };
  },
  components: {
    DonateForm,
  },
  computed: {},
  methods: {
    async getRates() {
      const rates = await api.rates.get();

      console.log(rates);

      this.rates = {
        base: rates.base,
        rates: rates.rates,
      };
    },
    donate() {},
  },
  mounted() {
    this.getRates();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
.donate {
  &__heading {
    @apply mb-8 text-center;
  }
}
</style>
