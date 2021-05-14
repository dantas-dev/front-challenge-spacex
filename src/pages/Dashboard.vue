<template>
  <main>
    <h1>Last launches <font-awesome-icon icon="rocket" /></h1>
    <div class="cardlist">
      <router-link
        to="/mission"
        class="card"
        v-for="(mission, index) in launches"
        :key="index"
      >
        <h4>{{ mission.mission_name }}</h4>
        <p v-if="mission.details !== null">
          {{ mission.details.substring(0, 70) + "..." }}
        </p>
        <p v-else>With no description assigned to the event.</p>
        <span>{{
          new Date(mission.launch_date_local) | date("dd/MM/yyyy")
        }}</span>
      </router-link>
    </div>
  </main>
</template>

<script>
import gql from "graphql-tag";

import { createDateFilter } from "vue-date-fns";
import locale from "date-fns/locale/pt-BR";

export default {
  name: "Dashboard",
  apollo: {
    launches: {
      query: gql`
        query {
          launchesPast(limit: 10) {
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
  filters: {
    date: createDateFilter("dd MMMM yyyy", { locale }),
  },
};
</script>

<style scoped>
main {
  /* background-color: var(--gray-100); */

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
  /* background-color: var(--white); */
  background-color: var(--gray-50);
  margin: 1rem;
  padding: 1rem;
  border: var(--gray-200) solid 2px;
  border-radius: 0.5rem;
}
.card h4 {
  font-size: 1.2rem;
}
.card p {
  margin: 1rem 0 1rem 0;
}
.card span {
  float: right;
  font-style: italic;
}

@media (max-width: 1080px) {
  .card {
    width: 100%;
  }
}
</style>
