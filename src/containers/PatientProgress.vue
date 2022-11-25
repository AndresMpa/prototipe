<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col class="d-flex" cols="12" md="12" sm="12">
        <v-sheet
          class="d-flex rounded w-100 mb-5 justify-center"
          color="grey-lighten-3"
          height="420"
        >
          <v-col class="d-flex" cols="12" md="4" sm="12">
            <BarChart />
          </v-col>
          <v-col class="d-flex" cols="12" md="4" sm="12">
            <PieChart />
          </v-col>
          <v-col class="d-flex" cols="12" md="4" sm="12">
            <LineChart />
          </v-col>
        </v-sheet>
      </v-col>

      <v-col class="d-flex" cols="12" md="12" sm="12">
        <v-row>
          <v-col cols="4">
            <v-sheet
              class="d-flex mx-5 rounded overflow-auto"
              color="white"
              height="420"
            >
              <History />
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="d-flex rounded overflow-auto" height="420">
              <v-card
                class="w-100"
                title="Dr. Marcus Obrien"
                subtitle="Notas del psicologo: Sesión 25/11/2022"
              >
                <v-card-text class="text-justify">
                  Ir al gimnasio con Pedro el de la pescadería te esta aydando a
                  bajar tu ansiedad, pero estoy notando que te has estado
                  durmiendo muy tarde, intenta dormir un poco más, pasar hasta 2
                  semanas durmiendo un promedio de 2 horas te harás más
                  irritable y puede que haga más complicado el tratamieno;
                  luego, no soy medico pero creo que tampoco es sano
                </v-card-text>
              </v-card>
            </v-sheet>
          </v-col>

          <v-col cols="4">
            <v-sheet
              class="d-flex rounded overflow-auto"
              color="secondary"
              height="420"
            >
              <v-card
                class="w-100"
                title="Actividades por desarrollar"
                subtitle="Sesión 25/11/2022"
              >
                <v-card-text class="text-justify w-75 mx-auto">
                  <ul class="d-flex flex-column justify-space-between">
                    <li>
                      Salir en bicicleta en la mañana, te ayudará a despegar la
                      mente
                    </li>

                    <li>
                      Practicar 30 minutos de yoga en las mañanas o noches
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-sheet class="d-flex mx-auto mt-5 rounded" height="150">
        <v-card class="w-100">
          <div height="100%">
            <div class="d-flex overflow-auto flex-row align-start">
              <v-avatar color="grey" size="150" rounded="0">
                <v-img
                  cover
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-avatar>
              <v-list-item
                title="Dr. Marcus Obrien"
                subtitle="Estado: En linea"
              >
                <v-card-actions class="mt-14">
                  <v-btn color="primary" variant="text"> Solicitar cita </v-btn>
                  <v-btn> Contactar </v-btn>
                </v-card-actions>
              </v-list-item>
            </div>
          </div>
        </v-card>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
import History from "@components/Activities/History.vue";
import LineChart from "@components/Stats/LineChart.vue";
import PieChart from "@components/Stats/PieChart.vue";
import BarChart from "@components/Stats/BarChart.vue";

export default {
  name: "PatientProgress",
  components: {
    LineChart,
    BarChart,
    PieChart,
    History,
  },
};
</script>
