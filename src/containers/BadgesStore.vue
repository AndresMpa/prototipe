<template>
  <v-container fluid>
    <v-card :title="name.title" :subtitle="name.hint" class="d-flex ma-5" />
    <v-row>
      <v-col
        v-for="(item, index) in store"
        class="d-flex justify-center child-flex"
        :key="index"
        cols="12"
        xs="12"
        sm="6"
        md="3"
      >
        <Badges :badge="item" :key="index" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Badges from "@components/Achievements/Badges.vue";

export default {
  name: "BadgesStore",
  props: {
    name: Object,
    store: Array,
  },
  components: {
    Badges,
  },
};
</script>
