<template>
  <v-menu transition="slide-x-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props" dark>
        <v-icon> {{ menu.icon }} </v-icon>
      </v-btn>
    </template>
    <Navigator :routes="menu.path" />
  </v-menu>
</template>

<script>
import Navigator from "@components/Navigator.vue";
export default {
  name: "PopupRouter",
  components: { Navigator },
  props: {
    menu: Object,
  },
};
</script>

<style lang="css" scoped></style>
