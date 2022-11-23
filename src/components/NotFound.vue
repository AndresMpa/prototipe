<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="src/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">
        Ups... Pagina no encontada
      </div>

      <h1 class="text-h2 font-weight-bold">404</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            rel="noopener noreferrer"
            @click="takeBack"
            target="_blank"
            min-width="228"
            color="primary"
            variant="flat"
            size="x-large"
          >
            <v-icon icon="mdi-speedometer" size="large" start />

            Regresar
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  methods: {
    takeBack() {
      if (this.$router.options.history.state.back) {
        this.$router.go(-1);
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
