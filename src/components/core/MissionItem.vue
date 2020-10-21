<template>
  <v-card
    class="pa-2 ma-2"
    outlined
    hover
    @click="$emit('target',mission)"
  >
    <v-card-title>
      {{mission.mission_name}}
    </v-card-title>
    <v-card-text>
      <div class="text-container">
        {{mission.details}}
      </div>
      <div class="text-right mt-4">{{mission.launch_date_local | converteData}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MissionItem",

  props: {
    mission: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  filters: {
    converteData(data){
      data = data.toString();
      return data.substring(0, 10).split("-").reverse().join("/");
    }
  }
};
</script>
