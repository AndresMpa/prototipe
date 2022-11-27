<template>
  <v-card :title="title" :subtitle="subtitle" class="d-flex mb-5" />
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
