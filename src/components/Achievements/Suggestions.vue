<template>
  <v-carousel cycle height="145" hide-delimiter-background hide-delimiters show-arrows="hover">
    <v-carousel-item v-for="(slide, index) in slides" :key="index">
      <v-sheet height="100%">
        <picture class="d-flex fill-height justify-center align-center">
          <source srcset="../../assets/logo_color.svg" />
          <img src="../../assets/logo_color.svg" class="h-75" />
          <v-divider vertical class="ma-5 w-25 h-75"></v-divider>
          <div class="text-h2">
            {{ slide }}
          </div>
        </picture>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Activities",
  data() {
    return {
      slides: [
        "Meditar",
        "Leer un libro",
        "Salir a correr",
        "Hacer ejercicio",
        "Salir con amigos",
      ],
    };
  },
};
</script>
