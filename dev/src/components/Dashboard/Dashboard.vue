<template>
  <div class="container" v-responsive="['xs', 'sm', 'md', 'lg', 'xl']">
    <div v-if="$store.state.modinfo.tab == 0">
      <div class="title">
        Last Launches <img src="../../assets/rocket.png" width="20px" />
      </div>
      <Card />
    </div>
    <div v-if="$store.state.modinfo.tab == 1">
      <Mission />
    </div>
  </div>
</template>

<script>
import Card from "./InfoCard/InfoCard.vue";
import Mission from "./Mission/Mission.vue";
import vueResponsive from "vue-responsive";
export default {
  name: "DashBoard",
  components: { Card, Mission },
  directives: { vueResponsive },
  computed: {
    index: {
      get() {
        return this.$store.state.modinfo.index;
      },
      set(newIndex) {
        this.$store.commit("SET_INDEX", newIndex);
      },
    },

    tab: {
      get() {
        return this.$store.state.modinfo.tab;
      },
      set(newTab) {
        this.$store.commit("SET_TAB", newTab);
      },
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 500px;
  margin: 0 auto;
}

.title {
  padding: 8px;
  font-size: 24px;
  text-align: left;
  position: relative;
  color: #000000;
  font-weight: bold;
}
</style>
