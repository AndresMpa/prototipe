<template>
  <v-main>
    <Router />
    <Bar />
    <router-view />
  </v-main>
</template>

<script>
import Router from "@templates/Router.vue";
import Bar from "@templates/Bar.vue";

export default {
  name: "Home",
  components: {
    Router,
    Bar,
  },
};
</script>
