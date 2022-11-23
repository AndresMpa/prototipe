<template>
  <v-main>
    <Router />
    <Bar />
    <NotFound />
  </v-main>
</template>

<script>
import NotFound from "@components/NotFound.vue";
import Router from "@templates/Router.vue";
import Bar from "@templates/Bar.vue";

export default {
  name: "Home",
  components: {
    NotFound,
    Router,
    Bar,
  },
};
</script>
