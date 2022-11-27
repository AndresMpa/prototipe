<template>
  <v-container fluid>
    <SectionTitle :title="stats.title" :subtitle="stats.subtitle" />
    <Stats />
    <SectionTitle :title="appointment.title" :subtitle="appointment.subtitle" />
    <v-row no-gutters>
      <LastAppointment />
      <Contact />
    </v-row>
  </v-container>
</template>

<script>
import LastAppointment from "@containers/LastAppointment.vue";
import SectionTitle from "@components/SectionTitle.vue";
import Stats from "@components/Activities/Stats.vue";
import Contact from "@components/Contact.vue";

export default {
  name: "Review",
  components: {
    LastAppointment,
    SectionTitle,
    Contact,
    Stats,
  },
  data: () => ({
    stats: {
      title: "Estadisticas",
      subtitle: "Progreso de tu tratamiento",
    },
    appointment: {
      title: "Datos sobre tu última cita",
      subtitle: "",
    },
  }),
};
</script>
