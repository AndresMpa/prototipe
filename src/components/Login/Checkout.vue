<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            rel="noopener noreferrer"
            @click="takeBack"
            target="_blank"
            min-width="228"
            variant="flat"
            size="x-large"
          >
            <v-icon icon="mdi-home" size="large" start />

            Volver al registro
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "Checkout",

  methods: {
    takeBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
