<template>
  <v-main>
    <Router />
    <Bar />

    <Suggestions />
    <Summary />
  </v-main>
</template>

<script>
import Suggestions from "@components/Achievements/Suggestions.vue";
import Summary from "@containers/Summary.vue";
import Router from "@templates/Router.vue";
import Bar from "@templates/Bar.vue";

export default {
  name: "Home",
  components: {
    Suggestions,
    Summary,
    Router,
    Bar,
  },
};
</script>
