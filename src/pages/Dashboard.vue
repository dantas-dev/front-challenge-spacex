<template>
  <main>
    <h1>Last launches <font-awesome-icon icon="rocket" /></h1>
    <div class="cardlist">
      <router-link
        class="card"
        v-for="mission in launches"
        :key="mission.id"
        :to="{ name: 'mission', params: { id: mission.id } }"
      >
        <CardItem
          v-bind:mission_name="mission.mission_name"
          v-bind:mission_details="mission.details"
          v-bind:mission_launch_date="mission.launch_date_local"
        />
      </router-link>
    </div>
  </main>
</template>

<script>
import CardItem from "../components/CardItem.vue";

import gql from "graphql-tag";

export default {
  name: "Dashboard",
  components: {
    CardItem,
  },
  apollo: {
    launches: {
      query: gql`
        query {
          launchesPast(limit: 10) {
            id
            mission_name
            details
            launch_date_local
            links {
              article_link
              video_link
              flickr_images
            }
          }
        }
      `,
      update: (data) => data.launchesPast,
    },
  },
};
</script>

<style scoped>
main {
  background-image: url("../assets/mission_background.jpg");
  padding-top: 5rem;
  min-height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  color: var(--gray-200);
  text-align: center;
  text-transform: capitalize;
}
.cardlist {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card {
  width: 40%;
  background-color: var(--gray-50);
  margin: 1rem;
  padding: 1rem;
  border: var(--gray-200) solid 2px;
  border-radius: 0.5rem;
  opacity: 0.8;
  transition: all 0.2s linear;
}
.card:hover,
.card:focus {
  opacity: 1;
  box-shadow: 2px 8px 100px rgba(0, 0, 0, 0.15);
  transform: translate3D(0, -8px, 0);
}

@media (max-width: 1080px) {
  .card {
    width: 100%;
  }
}
</style>
