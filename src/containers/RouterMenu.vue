<template>
  <container>
    <v-list>
      <v-list-item
        :prepend-avatar="user.avatar"
        :title="user.username"
        :subtitle="user.mail"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <Navigator :routes="menu.path" />
  </container>
</template>

<script>
import { mapGetters } from "vuex";

import Navigator from "@components/Navigator.vue";

export default {
  name: "RouterMenu",
  components: { Navigator },
  props: {
    menu: Object,
  },
  computed: {
    ...mapGetters("user", {
      user: "getUserData",
    }),
  },
};
</script>

<style lang="css" scoped></style>
