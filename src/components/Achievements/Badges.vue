<template>
  <v-card height="280px" width="320px">
    <v-card-title>
      {{ badge.name }}
    </v-card-title>
    <v-card-text>
      {{ badge.description }}
    </v-card-text>
    <v-divider class="mb-auto"></v-divider>
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
