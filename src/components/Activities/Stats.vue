<template>
  <v-row class="mb-6 mx-auto">
    <v-col class="d-flex" cols="12">
      <v-row>
        <v-col class="mx-auto" cols="12" lg="4" md="6" sm="12">
          <v-sheet
            class="d-flex rounded w-100 mx-2 justify-center"
            height="420"
          >
            <BarChart />
          </v-sheet>
        </v-col>
        <v-col class="mx-auto" cols="12" lg="4" md="6" sm="12">
          <v-sheet
            class="d-flex rounded w-100 mx-2 justify-center"
            height="420"
          >
            <PieChart />
          </v-sheet>
        </v-col>
        <v-col class="mx-auto" cols="12" lg="4" md="8" sm="12">
          <v-sheet
            class="d-flex rounded w-100 mx-2 justify-center"
            height="420"
          >
            <LineChart />
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
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
