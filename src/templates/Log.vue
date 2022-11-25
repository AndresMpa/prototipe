<template>
  <v-container class="fill-height mt-16">
    <v-row
      class="d-flex justify-center align-center"
      justify="space-around"
      color="primary"
    >
      <v-img
        lazy-src="src/assets/logo.svg"
        src="src/assets/logo.svg"
        aspect-ratio="1"
        width="150"
        cover
      ></v-img>

      <Form :content="currentRouteName" />
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
  },
};
</script>
