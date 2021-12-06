<template>
  <div class="container">
    <div class="title">
      Last Launches <img src="../../assets/rocket.png" width="20px" />
    </div>

    <div class="card"></div>
    <Card />
  </div>
</template>

<script>
import Card from "./InfoCard.vue";
export default {
  name: "DashBoard",
  components: { Card },
};
</script>

<style scoped>
.container {
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
