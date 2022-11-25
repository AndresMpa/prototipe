<template>
  <div class="ma-2 rounded-lg">
    <Bar :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "Stats",
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Progreso del mes",
            backgroundColor: "#78f",
            data: [23, 20, 25],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  components: { Bar },
};
</script>

<style scoped>
.stats {
  z-index: 10;
}
</style>
