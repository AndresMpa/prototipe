<template>
  <v-carousel
    hide-delimiter-background
    show-arrows="hover"
    hide-delimiters
    class="mb-5"
    height="420"
    cycle
  >
    <v-carousel-item>
      <v-sheet class="d-flex rounded w-100 mb-5 justify-center" height="420">
        <BarChart />
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet class="d-flex rounded w-100 mb-5 justify-center" height="420">
        <PieChart />
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet class="d-flex rounded w-100 mb-5 justify-center" height="420">
        <LineChart />
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import LineChart from "@components/Stats/LineChart.vue";
import PieChart from "@components/Stats/PieChart.vue";
import BarChart from "@components/Stats/BarChart.vue";
export default {
  name: "Stats",
  components: {
    LineChart,
    BarChart,
    PieChart,
  },
};
</script>

<style></style>
