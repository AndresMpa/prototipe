<template>
  <v-timeline side="end" align="start">
    <v-timeline-item dot-color="teal-lighten-3" size="small">
      <div class="d-flex">
        <strong class="mr-4">9-11am</strong>
        <div>
          <strong>Seguir con el MVP</strong>
          <div class="text-caption">Insights</div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="pink" size="small">
      <div class="d-flex">
        <strong class="mr-4">12pm</strong>
        <div>
          <strong>Pausa para comer</strong>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="teal-lighten-3" size="small">
      <div class="d-flex">
        <strong class="mr-4">3-4pm</strong>
        <div>
          <strong>Reunión con Marcus</strong>
          <div class="text-caption mb-2">Meet: https://meet.google.com/avr-amgt-gkp</div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="pink" size="small">
      <div class="d-flex">
        <strong class="mr-4">4:15pm - 2am</strong>
        <div>
          <strong>Seguir con el MVP</strong>
          <div class="text-caption">Insights</div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "History",
};
</script>
