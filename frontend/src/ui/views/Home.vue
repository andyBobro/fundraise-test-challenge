<template>
  <div class="home">
    <Title />
    <TopDonaters :donaters="donaters" />
  </div>
</template>

<script>
import Title from "ui/components/Home/Title";
import TopDonaters from "ui/components/Home/TopDonaters";
import api from "utils/api";

export default {
  name: "Home",
  data() {
    return {
      donaters: [],
    };
  },
  components: {
    Title,
    TopDonaters,
  },
  async mounted() {
    const donaters = await api.donations.get();

    this.donaters = donaters;
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply text-center;
  img {
    @apply inline-block;
  }
}
</style>
