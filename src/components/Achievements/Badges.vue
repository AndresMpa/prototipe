<template>
  <v-card :title="badge.name" :subtitle="badge.description" height="250px" width="300px">
    <v-img :lazy-src="badge.img" :src="badge.img" aspect-ratio="1" cover>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "Badges",
  props: {
    badge: Object,
  },
};
</script>
