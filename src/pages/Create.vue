<template>
  <v-main>
    Ups...
  </v-main>
</template>

<script>

export default {
  name: "Create",
  mounted() {
    this.$router.push({ name: "Login" });
  },
};
</script>
