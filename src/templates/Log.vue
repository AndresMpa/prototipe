<template>
  <v-container class="fill-height">
    <v-row
      class="d-flex justify-center align-center"
      justify="space-around"
      color="primary"
    >
      <v-col cols="12" lg="6" md="2" sm="2" xs="2">
        <v-img :lazy-src="logo" :src="logo" aspect-ratio="1" cover></v-img>
      </v-col>

      <v-col cols="12" lg="6" md="12" sm="12" xs="12">
        <Form :content="currentRouteName" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Form from "@containers/Form.vue";

export default {
  name: "LoginForm",
  components: {
    Form,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    logo() {
      return this.$vuetify.theme.current.dark
        ? "https://raw.githubusercontent.com/AndresMpa/prototype/main/src/assets/logo_white.svg"
        : "https://raw.githubusercontent.com/AndresMpa/prototype/main/src/assets/logo.svg";
    },
  },
};
</script>
