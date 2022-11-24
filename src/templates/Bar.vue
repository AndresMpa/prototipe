<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="toggle" />

    <v-divider></v-divider>

    <PopupRouter :menu="menu" />
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

import PopupRouter from "@containers/PopupRouter.vue";

export default {
  name: "Bar",
  data: () => ({
    menu: {
      icon: "mdi-dots-vertical",
      path: [
        {
          to: "/login",
          icon: "mdi-login",
          name: "Iniciar sesión",
        },
        {
          to: "/logout",
          icon: "mdi-close",
          name: "Cerrar sesión",
        },
      ],
    },
  }),
  components: {
    PopupRouter,
  },
  methods: {
    ...mapActions("global", {
      toggle: "toggleDrawer",
    }),
  },
};
</script>
