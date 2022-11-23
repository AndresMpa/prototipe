<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="toggle" />

    <template v-slot:append>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Bar",
  methods: {
    ...mapActions("global", {
      toggle: "toggleDrawer",
    }),
  },
};
</script>
