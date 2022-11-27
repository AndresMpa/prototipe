<template>
  <v-navigation-drawer v-model="drawer" @click="toggle" temporary>
    <RouterMenu :menu="menu" />
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from "vuex";
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
          to: "/recent",
          icon: "mdi-home",
          name: "Resumen",
        },
        {
          to: "/achievements",
          icon: "mdi-manjaro",
          name: "Logros e insignias",
        },
        {
          icon: "mdi-plus-box-multiple",
          name: "Estadisticas y progreso",
          to: "/progress",
        },
        /*
        {
          icon: "mdi-newspaper",
          name: "Pacientes",
          to: "/patients",
        },
        */
      ],
    },
  }),
  methods: {
    ...mapActions("global", {
      toggle: "toggleDrawer",
    }),
  },
  computed: {
    ...mapGetters("global", {
      drawer: "getDrawer",
    }),
  },
};
</script>
