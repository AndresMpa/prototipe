<template>
  <v-navigation-drawer v-model="drawer">
    <RouterMenu :menu="menu" />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

import RouterMenu from "@containers/RouterMenu.vue";

export default {
  name: "Router",
  components: { RouterMenu },
  data: () => ({
    menu: {
      icon: "mdi-account",
      path: [
        {
          to: "Achievements",
          icon: "mdi-manjaro",
          name: "Logros e insignias",
        },
        {
          to: "Progress",
          icon: "mdi-plus-box-multiple",
          name: "Estadisticas y progreso",
        },
        {
          to: "Patients",
          icon: "mdi-newspaper",
          name: "Pacientes",
        },
      ],
    },
  }),
  computed: {
    ...mapGetters("global", {
      drawer: "getDrawer",
    }),
  },
};
</script>
