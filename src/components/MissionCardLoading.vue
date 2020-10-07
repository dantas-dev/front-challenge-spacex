<template>
  <div class="card-container">
    <div class="card-title loading"></div>
    <div class="card-description loading"></div>
    <div class="card-date loading"></div>
  </div>
</template>

<script>
export default {
  name: "MissionCardLoading"
};
</script>

<style scoped>
@import "~@/styles/card.css";

.card-container {
  background-color: lightgray;
}

.card-title,
.card-description,
.card-date {
  position: relative;
}

.card-title,
.card-date {
  width: 50%;
  height: 25%;
}

.card-description {
  width: 100%;
  height: 50%;
  margin: 10px 0;
}

.loading::after {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, transparent, white, transparent);
  background-size: 50%;
  background-position-x: -200%;
  background-repeat: no-repeat;
  animation: loading 1s infinite;
}

@keyframes loading {
  100% {
    background-position-x: 200%;
  }
}
</style>
