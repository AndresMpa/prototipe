<template>
  <v-app id="inspire">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  beforeRouteUpdate(to, from, next) {
    console.log(to, from, next);
  },
};
</script>

<style scoped>
.v-theme--dark.v-application {
  background: #070335;
  background: -webkit-linear-gradient(to rigth, #050872, #070335);
  background: linear-gradient(to rigth, #050872, #070335);
}
.v-theme--light.v-application {
  background: #74ebd5;
  background: -webkit-linear-gradient(to rigth, #acb6e5, #74ebd5);
  background: linear-gradient(to rigth, #acb6e5, #74ebd5);
}
</style>
