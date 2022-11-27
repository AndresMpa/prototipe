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
  background: #1e86e7;
  background: -webkit-linear-gradient(to rigth, #00d4ff, #1e86e7);
  background: linear-gradient(to rigth, #00d4ff, #1e86e7);
}
</style>
