<template>
  <Layout>
    <div>DESKTOP</div>
    <Window
      v-for="(win, w) in windows"
      :key="win.id"
      :win="win"
      :order="w"
    ></Window>
  </Layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Layout from "ui/components/Desktop/Layout";
import Window from "ui/components/Desktop/Window";
// import { updateLocalStorage } from "utils/tools";

export default {
  name: "Desktop",
  components: {
    Layout,
    Window,
  },
  computed: {
    ...mapState("desktop", ["windows"]),
  },
  methods: {
    ...mapMutations("desktop", ["SET_WINDOW_DATA"]),
  },
  mounted() {
    console.log(this.windows);
  },
  beforeDestroy() {
    // updateLocalStorage('invester.desktop', this.windows)
  },
};
</script>
