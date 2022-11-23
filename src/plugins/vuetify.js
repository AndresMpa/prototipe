/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

import { aliases, mdi } from "vuetify/iconsets/mdi";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#1E1E1E",
        main: "#1E88E5",
        alter: "#994B23",
        detail: "#E66929",
        signs: "#997E05",
        alert: "#E6BF12",
      },
      dark: {
        primary: "#F5F5F5",
        main: "#66BB6A",
        alter: "#65476E",
        detail: "#A970BA",
        signs: "#6E3C31",
        alert: "#BA6D5D",
      },
    },
  },
});
