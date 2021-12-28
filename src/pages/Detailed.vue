<template>
  <div class="container">
    <img :src="data.ships[0].image" />
    <div class="textDiv">
      <h2>{{ data.mission_name }}</h2>
      <h4>{{ data.details }}</h4>
    </div>
    <button @click="console.log(data)">
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
    seeMore: (links) => {
      let link =
        links.article_link == null ? links.video_link : links.article_link;
      window.open(link);
    },
  },
  setup() {
    const route = useRoute();
    const response = getLaunch(route.params.launchId);
    return response;
  },
};
</script>

<style>
.container {
  display: flex;
  border: solid 3px #dfe6ed;
  margin-inline: 5rem;
  background-color: white;
  margin-bottom: 10px;
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
.textDiv {
  padding-inline: 10px;
}
.textButton {
  margin: 2px;
  margin-block: 10px;
}
</style>
