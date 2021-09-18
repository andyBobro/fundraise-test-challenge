<template>
  <div class="donate">
    <h3 class="donate__heading">Donate us and help pc gamers!</h3>
    <DonateForm :donated="donated" :rates="rates" @donate="donate" />
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
      donated: false,
    };
  },
  components: {
    DonateForm,
  },
  computed: {},
  methods: {
    async getRates() {
      const rates = await api.rates.get();

      this.rates = {
        base: rates.base,
        rates: rates.rates,
      };
    },
    async donate(e) {
      const response = await api.donations.post(e);

      if (response.status === 200) {
        this.donated = true;
      }
    },
  },
  mounted() {
    this.getRates();
  },
};
</script>

<style lang="scss">
.donate {
  &__heading {
    @apply mb-8 text-center;
  }
}
</style>
