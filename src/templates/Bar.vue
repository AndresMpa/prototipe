<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="toggle" />

    <v-divider></v-divider>
    <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" />
    <PopupRouter :menu="menu" />
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
import { useTheme } from "vuetify";

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
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark";
      },
    };
  },
};
</script>
