<template>
  <div class="ma-2 rounded-lg">
    <Pie :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  ArcElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "PieChart",
  data() {
    return {
      chartData: {
        labels: [
          "Hacer ejercicio",
          "Salir con Pedro",
          "Leer en el parque",
          "Ir al cine",
        ],
        datasets: [
          {
            label: "Actividades realizadas",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [23, 20, 25, 2],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  components: { Pie },
};
</script>

<style scoped>
.stats {
  z-index: 10;
}
</style>
