<template>
  <v-col class="d-flex" cols="12" md="12" sm="12">
    <v-row>
      <v-col cols="12" md="4" sm="12">
        <v-sheet class="d-flex mx-5 rounded overflow-auto" height-max="420">
          <History />
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-sheet class="d-flex rounded overflow-auto" height-max="420">
          <v-card
            class="w-100"
            title="Dr. Marcus Obrien"
            subtitle="Notas del psicologo: Sesión 25/11/2022"
          >
            <v-card-text class="text-justify">
              Ir al gimnasio con Pedro el de la pescadería te esta aydando a
              bajar tu ansiedad, pero estoy notando que te has estado durmiendo
              muy tarde, intenta dormir un poco más, pasar hasta 2 semanas
              durmiendo un promedio de 2 horas te harás más irritable y puede
              que haga más complicado el tratamieno; luego, no soy medico pero
              creo que tampoco es sano
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="4" sm="12">
        <v-sheet
          class="d-flex rounded overflow-auto"
          color="secondary"
          height-max="420"
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

                <li>Practicar 30 minutos de yoga en las mañanas o noches</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import History from "@components/Activities/History.vue";

export default {
  name: "LastAppointment",
  components: {
    History,
  },
};
</script>
