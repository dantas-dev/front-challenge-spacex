<template>
  <div>
    <div class="mission-card border with-shadow p-8">
      <div
        v-if="
          this.$store.state.modinfo.cards[$store.state.modinfo.index].links
            .flickr_images[0]
        "
        class="img-block"
      >
        <img
          class="img"
          :src="
            this.$store.state.modinfo.cards[$store.state.modinfo.index].links
              .flickr_images
          "
        />
      </div>
      <div v-else>
        <img class="img" src="../../../assets/img.png" />
      </div>
      <div class="title p-l-4">
        {{
          this.$store.state.modinfo.cards[$store.state.modinfo.index]
            .mission_name
        }}
      </div>
      <div
        v-if="
          this.$store.state.modinfo.cards[$store.state.modinfo.index].details
        "
        class="break-word p-l-4"
      >
        {{
          this.$store.state.modinfo.cards[$store.state.modinfo.index].details
        }}
      </div>
      <div v-else>
        <p>No details</p>
      </div>
      <div class="center">
        <a
          class="button"
          :href="
            this.$store.state.modinfo.cards[$store.state.modinfo.index].links
              .video_link
          "
          target="_blank"
        >
          See more
        </a>
      </div>
    </div>
    <div class="center">
      <button class="button" @click="$store.state.modinfo.tab = 0">
        Return
      </button>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "Mission",

  computed: {
    ...mapState(["cards"]),
  },

  beforeCreate() {
    this.$store.dispatch("fetchCard");
  },
};
</script>

<style type="text/css" scoped src="./style.css"></style>

