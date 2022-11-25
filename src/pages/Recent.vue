<template>
  <div>
    <Suggestions />
    <Summary />
  </div>
</template>

<script>
import Suggestions from "@components/Achievements/Suggestions.vue";
import Summary from "@containers/Summary.vue";

export default {
  name: "Recent",
  components: {
    Suggestions,
    Summary,
  },
};
</script>
