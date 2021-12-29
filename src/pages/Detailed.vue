<template>
  <div v-if="loading">Loading...</div>
  <div class="container" v-else>
    <img :src="data.image" />
    <div class="textDiv">
      <h2>{{ data.mission_name }}</h2>
      <h4>{{ data.details }}</h4>
    </div>
    <button v-on:click="goTo(data.seeMore)">
      <h3 class="textButton">See more</h3>
    </button>
  </div>
</template>

<script>
import { getLaunch } from "../services/comunication";
import { useRoute } from "vue-router";
export default {
  name: "Detailed",
  methods: {
    goTo: (link) => window.open(link),
  },
  setup() {
    const route = useRoute();
    const response = getLaunch(route.params.launchId);
    return response;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  border: solid 3px #dfe6ed;
  margin-inline: 10%;
  background-color: white;
  margin-block: 20px;
  flex-direction: column;
}
button {
  margin-bottom: 20px;
  width: 130px;
  align-self: center;
  border: transparent;
  border-radius: 7px;
  background-color: var(--button-default);
  cursor: pointer;
}
img {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  max-height: 50%;
}
.textDiv {
  padding-inline: 10px;
}
.textButton {
  margin: 2px;
  margin-block: 10px;
}
</style>
