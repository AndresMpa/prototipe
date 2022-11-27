<template>
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
          <v-list-item title="Dr. Marcus Obrien" subtitle="Estado: En linea">
            <v-card-actions class="mt-14">
              <v-btn color="primary" variant="text"> Solicitar cita </v-btn>
              <v-btn> Contactar </v-btn>
            </v-card-actions>
          </v-list-item>
        </div>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "Contact",
};
</script>
