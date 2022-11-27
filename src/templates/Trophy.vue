<template>
  <div>
    <BadgesStore :name="intro.unlocked" :store="unlockedBadges" />
    <BadgesStore :name="intro.locked" :store="lockedBadges" />
  </div>
</template>

<script>
import BadgesStore from "@containers/BadgesStore.vue";

export default {
  name: "Trophy",
  data: () => ({
    intro: {
      unlocked: {
        title: "Logros obtenidos",
        hint: "Estos son los logros que tienes, ¡Consiguelos todos!",
      },
      locked: {
        title: "Lista de logros",
        hint: "Aquí puedes ver todos los logros que puedes tener",
      },
    },
    unlockedBadges: [
      {
        description: "Salir a hacer senderismo al menos 5 veces por una semana",
        img: "https://picsum.photos/500/300?image=17",
        name: "Sendero zen",
      },
      {
        description: "Salir a hacer camping un fin de semana por más de 2 días",
        img: "https://picsum.photos/500/300?image=15",
        name: "¡Campamento!",
      },
      {
        description: "Ingresa a tu cuentra de Heropu",
        img: "https://picsum.photos/500/300?image=1",
        name: "Empieza el tratamiento",
      },
    ],
    lockedBadges: [
      {
        description: "Ir a la playa a nadar una tarde",
        img: "https://picsum.photos/500/300?image=16",
        name: "Oceano de pensamientos",
      },
      {
        description: "Adopta o cultiva una planta en una maseta",
        img: "https://picsum.photos/500/300?image=18",
        name: "Amiga de verder ramas",
      },
      {
        description: "Abrazar un arbol más grande que el ancho de los brazos",
        img: "https://picsum.photos/500/300?image=19",
        name: "Señor árbol",
      },
      {
        description: "Mantener tu lugar de descanso ordenado por una semana",
        img: "https://picsum.photos/500/300?image=20",
        name: "Un lugar en paz",
      },
    ],
  }),
  components: {
    BadgesStore,
  },
};
</script>

<style></style>
