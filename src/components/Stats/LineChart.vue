<template>
  <div class="ma-2 rounded-lg">
    <Line :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  name: "LineChart",
  data() {
    return {
      chartData: {
        labels: ["Marzo", "Octubre", "Noviembre"],
        datasets: [
          {
            label: "Percepción de felicidad (1 a 10)",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [3, 2, 5],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  components: { Line },
};
</script>

<style scoped>
.stats {
  z-index: 10;
}
</style>
