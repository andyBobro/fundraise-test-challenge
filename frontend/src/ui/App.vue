<template>
  <Page>
    <Nav />
    <router-view />
    <Copyright />
  </Page>
</template>

<script>
import Nav from "ui/components/common/Nav/index.vue";
import Page from "ui/components/common/Page/index.vue";
import Copyright from "ui/components/common/Copyright/index.vue";

export default {
  name: "App",
  components: {
    Nav,
    Page,
    Copyright,
  },
};
</script>

<style lang="scss" src="styles/globals/index.scss"></style>
