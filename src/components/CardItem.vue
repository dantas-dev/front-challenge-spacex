<template>
  <div>
    <h4>{{ mission_name }}</h4>
    <p v-if="mission_details !== null">
      {{ mission_details.substring(0, 70) + "..." }}
    </p>
    <p v-else>With no description assigned to the event.</p>
    <span>{{ new Date(mission_launch_date) | date("dd/MM/yyyy") }}</span>
  </div>
</template>

<script>
import { createDateFilter } from "vue-date-fns";
import locale from "date-fns/locale/pt-BR";

export default {
  name: "CardItem",
  props: {
    mission_name: String,
    mission_details: String,
    mission_launch_date: Date,
  },
  filters: {
    date: createDateFilter("dd MMMM yyyy", { locale }),
  },
};
</script>

<style scoped>
h4 {
  font-size: 1.2rem;
}
p {
  margin: 1rem 0 1rem 0;
}
span {
  float: right;
  font-style: italic;
}
</style>
