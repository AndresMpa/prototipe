<template>
  <v-card
    title="Ingresar"
    subtitle="Asistencia psicologica"
    class="mx-auto pa-5 checkin"
    elevation="5"
  >
    <v-text-field
      label="Nombre de usuario"
      :rules="errors"
      ref="name"
      required
    ></v-text-field>
    <v-text-field
      label="Contraseña"
      :rules="errors"
      ref="password"
      required
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-card-actions class="center">
      <v-btn rounded color="primary" @click="logUser">
        <v-icon> mdi-account </v-icon>
        Ingresar
      </v-btn>
      <v-btn small rounded @click="sendRegister">
        <v-icon> mdi-account-multiple-plus </v-icon>
        Crear cuenta
      </v-btn>

      <v-btn small rounded color="blue" @click="sendMain">
        <v-icon> mdi-lock-question </v-icon>
        ¿Olvidaste tu contraseña?
      </v-btn>
    </v-card-actions>

    <v-divider dark></v-divider>

    <div class="mt-5 center">
      <v-icon size="x-large" class="ma-2" icon="mdi-instagram" />
      <v-icon size="x-large" class="ma-2" icon="mdi-facebook" />
    </div>
    <span class="mt-1 center"> Redes sociales </span>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Checkin",
  data: () => ({
    password: null,
    user: null,
  }),
  methods: {
    ...mapActions("auth", {
      login: "setSession",
    }),
    ...mapActions("user", {
      setUser: "loginUser",
    }),
    logUser() {
      this.login(true);
      this.setUser({
        username: "Mr.Sabritas",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Sebastian+Sabritas",
      })
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.checkin {
  width: 80%;
}
.center {
  display: flex;
  justify-content: center;
}
</style>
