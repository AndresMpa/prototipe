<template>
  <v-row justify="space-around" color="primary">
    <template v-if="content === 'Login'">
      <Checkin />
    </template>
    <template v-else-if="content === 'Logout'">
      <Checkout />
    </template>
    <template v-else-if="content === 'Recovery'">
      <Recovery />
    </template>
    <template v-else-if="content === 'Create'">
      <Create />
    </template>
    <template v-else>
      <NotFound />
    </template>
  </v-row>
</template>

<script>
import Recovery from "@components/Login/Recovery.vue";
import Register from "@components/Login/Register.vue";
import Checkout from "@components/Login/Checkout.vue";
import Checkin from "@components/Login/Checkin.vue";
import NotFound from "@components/NotFound.vue";

export default {
  name: "Form",
  props: {
    content: String,
  },
  components: { NotFound, Recovery, Register, Checkout, Checkin },
};
</script>
