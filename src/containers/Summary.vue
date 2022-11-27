<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col class="d-flex" cols="12" md="4" sm="12">
        <v-sheet
          class="d-flex mx-auto rounded stats justify-center"
          height="420"
        >
          <BarChart />
        </v-sheet>
      </v-col>

      <v-divider
        class="d-xl-none d-lg-none d-md-none d-sm-block d-xm-block my-6"
      ></v-divider>

      <v-col class="d-flex" cols="12" md="4" sm="12">
        <v-row>
          <v-col cols="6">
            <v-sheet class="d-flex rounded overflow-auto" height="150">
              <v-card
                class="w-100"
                title="Ultima actividad"
                subtitle="Has obtenido 5 puntos"
                text="Ir al gimnasio con Pedro el de la pescadería"
              >
              </v-card>
            </v-sheet>
          </v-col>

          <v-col cols="6">
            <v-sheet
              class="d-flex rounded overflow-auto"
              color="secondary"
              height="150"
            >
              <v-card
                class="w-100"
                title="Propuesta"
                subtitle="Ganas 5 puntos"
                text="Salir en bicicleta mañana temprano"
              >
              </v-card>
            </v-sheet>
          </v-col>

          <v-col cols="12">
            <Contact />
          </v-col>
        </v-row>
      </v-col>

      <v-divider
        class="d-xl-none d-lg-none d-md-none d-sm-block d-xm-block my-6"
      ></v-divider>

      <v-col cols="12" md="4" sm="12">
        <v-sheet class="d-flex mx-5 rounded overflow-auto" height="420">
          <History />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import History from "@components/Activities/History.vue";
import BarChart from "@components/Stats/BarChart.vue";
import Contact from "@components/Contact.vue";

export default {
  name: "Summary",
  components: {
    BarChart,
    History,
    Contact,
  },
};
</script>

<style scoped>
.stats {
  z-index: 10;
}
</style>
