<template>
  <apollo-query
    :query="missions"
    :variables="{ limit }"
    fetch-policy="cache-and-network"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data">
        <p>{{ data.launches[0].mission_name }}</p>
        <p>{{ data.launches[0].details }}</p>
      </div>

      <!-- No result -->
      <div v-else>No result :(</div>
    </template>
  </apollo-query>
</template>

<script>
import { get_missions } from "@/graphql/missions";

export default {
  name: "Home",

  data() {
    return {
      limit: 3,
      missions: get_missions
    };
  }
};
</script>
