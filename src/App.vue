<template>
  <v-app id="inspire">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
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
