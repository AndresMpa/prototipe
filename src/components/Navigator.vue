<template>
  <v-list nav dense>
    <v-list-item-group
      v-for="(path, index) in routes"
      :key="index"
      color="primary"
      mandatory
    >
      <v-list-item :to="path.to">
        <template v-slot:prepend>
          <v-icon :icon="path.icon"></v-icon>
        </template>

        <v-list-item-title v-text="path.name" />
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "Navigator",
  props: {
    routes: Array,
  },
};
</script>
<style lang="css">
.list-route {
  padding: 0%;
  margin: 0%;
}
</style>
