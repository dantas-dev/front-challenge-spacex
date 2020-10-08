<template>
  <div class="page-container">
    <h1>Últimas missões &#128640;</h1>

    <apollo-query
      :query="missions"
      :variables="variables"
      fetch-policy="cache-and-network"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Carregando dado -->
        <div v-if="loading" class="apollo-data-container">
          <mission-card-loading v-for="i in 3" :key="i" />
        </div>

        <!-- Erro ao obter dado -->
        <div v-else-if="error">
          <mission-card-error />
        </div>

        <!-- Dado obtido -->
        <div v-else-if="data" class="apollo-data-container">
          <mission-card
            v-for="(launch, index) in data.launchesPast"
            :key="index"
            :mission="{
              name: launch.mission_name,
              media: launch.links,
              date: get_date(launch.launch_date_utc),
              description:
                launch.details || `This is the ${launch.mission_name} mission.`
            }"
            @click="mission_selected"
          />
        </div>

        <!-- Sem resultado -->
        <div v-else>
          <mission-card-empty />
        </div>
      </template>
    </apollo-query>
  </div>
</template>

<script>
import { get_missions } from "@/graphql/missions";
import MissionCard from "@/components/MissionCard";
import MissionCardLoading from "@/components/MissionCardLoading";
import MissionCardError from "@/components/MissionCardError";
import MissionCardEmpty from "@/components/MissionCardEmpty";

export default {
  name: "Home",

  components: {
    MissionCard,
    MissionCardLoading,
    MissionCardError,
    MissionCardEmpty
  },

  data() {
    return {
      variables: {
        limit: 12
      },
      missions: get_missions
    };
  },

  methods: {
    get_date(date_arg) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const date = new Date(date_arg);

      return date.toLocaleDateString("pt-br", { ...options, month: "numeric" });
    },

    mission_selected(mission) {
      this.$router.push({ name: "Mission", params: { mission } });
    }
  }
};
</script>

<style scoped>
.page-container {
  height: 100%;
  padding: 2vmax 3vmax;
}

h1 {
  color: var(--black);
  margin-bottom: 2vmax;
  font-size: min(9vw, 2rem);
}

.apollo-data-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 500px));
  justify-content: center;
  gap: 3vmax;
}
</style>
