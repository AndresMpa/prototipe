<template>
  <v-main>
    Ups...
  </v-main>
</template>

<script>

export default {
  name: "Recovery",
  mounted() {
    this.$router.push({ name: "Login" });
  },
};
</script>
