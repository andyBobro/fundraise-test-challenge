<template>
  <div class="donate">
    <h3 class="donate__heading">Donate us and help pc gamers!</h3>
    <DonateForm
      :donated="donated"
      :rates="rates"
      :errors="errors"
      @again="again"
      @donate="donate"
    />
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
      errors: [],
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
      const { name, amount, currency } = e;
      const payload = {
        amount,
        currency,
      };

      !!name && (payload.name = name);

      try {
        const response = await api.donations.post(payload);

        if (response.ok) {
          this.donated = true;
        } else {
          this.errors = response;
        }
      } catch (e) {
        //
      }
    },
    again() {
      this.donated = false;
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
