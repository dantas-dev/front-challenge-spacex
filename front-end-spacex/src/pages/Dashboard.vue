<template>
  <div class="home">
    <div class="dashboard-navbar" >
        <h1>Last Launches &#128640; </h1>
    </div>
    <apollo-query
      :query="missions"
      :variables="variables"
      fetch-policy="cache-and-network"
    >
      <template v-slot="{ result: { loading, data } }">

        <div v-if="loading" class="apollo-data-container">
          <mission-loading v-for="i in 10" :key="i" />
        </div>

        <div v-else-if="data" class="apollo-data-container">
          <mission-data
            v-for="(launch, index) in data.launchesPast"
            :key="index"
            :mission="{
              name: launch.mission_name,
              media: launch.links,
              date: getDate(launch.launch_date_utc),
              description:
                launch.details || `This is the ${launch.mission_name} mission.`
            }"
            @click="viewMission"
          />
        </div>

      </template>
    </apollo-query>
  </div>
</template>

<script>
import { getMissions } from "@/graphql/missions";
import MissionData from '../components/MissionCard/MissionData'
import MissionLoading from '../components/MissionCard/MissionLoading'

export default {
  name: "Dashboard",

  components: {
      MissionData,
      MissionLoading
  },

  data() {
    return {
      variables: {
        limit: 10
      },
      missions: getMissions
    };
  },

  methods: {
    getDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("pt-br", { ...options, month: "numeric" });
    },

    viewMission(mission) {
      this.$router.push({ name: "Mission", params: { mission } });
    }
  }
};
</script>

<style scoped>
.dashboard-navbar{
  text-align: start;
  padding-left: 40vh;
}

.page-container {
  height: 100%;
  padding: 2vmax 3vmax;
}

.apollo-data-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 700px));
  justify-content: center;
  gap: 1vmax;

}

</style>

