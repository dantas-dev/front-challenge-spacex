<template>
  <div class="card-container">
    <div class="card-title"></div>
    <div class="card-description loader"></div>
    <div class="card-date "></div>
  </div>
</template>

<script>
export default {
  name: "MissionLoading"
};
</script>

<style scoped>

.card-container {
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid black; /* Blue */
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
