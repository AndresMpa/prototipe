<template>
  <div>
    <PatientProgress />
  </div>
</template>

<script>
import PatientProgress from "@containers/PatientProgress.vue";

export default {
  name: "Progress",
  components: {
    PatientProgress,
  },
};
</script>
