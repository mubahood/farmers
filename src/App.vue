<template>
  <v-app id="app">
    <Layout v-if="this.has_layout"></Layout>
    <router-view v-if="!this.has_layout" />
  </v-app>
</template>

<script>
import Layout from "./components/Layout.vue";
import LayoutConfig from "./components/LayoutConfig";

export default {
  data() {
    return {
      has_layout: true,
    };
  },
  name: "App",
  watch: {
    $route(to, from) {
      this.show = false;
      const fullPath = window.location.pathname;
      this.has_layout = true;
      if (typeof LayoutConfig != "undefined") {
        if (typeof LayoutConfig.no_layout != "undefined") {
          for (let [key, value] of Object.entries(LayoutConfig.no_layout)) {
            if (value == fullPath) {
              console.log(fullPath);
              this.has_layout = false;
              break;
            }
          }
        }
      }
    },
  },
  created() {
    const fullPath = window.location.pathname;
    this.has_layout = true;
    if (typeof LayoutConfig != "undefined") {
      if (typeof LayoutConfig.no_layout != "undefined") {
        for (let [key, value] of Object.entries(LayoutConfig.no_layout)) {
          if (value == fullPath) {
            console.log(fullPath);
            this.has_layout = false;
            break;
          }
        }
      }
    }
  },
  components: {
    Layout,
  },
};
</script>
