<template>
   <core-mission-card
          v-show="missionExpanded.id && $vuetify.breakpoint.smAndUp && !inTransition"
          key="1"
          class="rocket-sticky mt-13"
    />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "MissaoAtiva",
  computed: {
      ...mapGetters({ missionExpanded: 'missionExpanded' , inTransition: 'transition'}),
    },
};
</script>
