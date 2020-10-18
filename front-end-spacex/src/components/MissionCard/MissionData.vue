<template>
  <article class="card-container" @click="$emit('click', mission)">
    <h2 class="card-title">{{ mission.name }}</h2>
    <p class="card-description">
      {{ mission.description.slice(0, 128) + "..." }}
    </p>
    <p class="card-date">{{ mission.date }}</p>
  </article>
</template>

<script>
export default {
  name: "MissionCard",

  props: ["mission"],
};
</script>

<style scoped>
.card-container {
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 8px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  background-color: whitesmoke;
  color: black;
}

.card-title{
    padding-top: 10px;
}
.card-description {
  padding-left: 15px;
  padding-right: 15px;
}

.card-container:hover {
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  background-color: white;
  opacity: 0.7;
}

.card-date {
  font-size: min(4vw, 1.05rem);
  font-style: italic;
  font-weight: bold;
  text-align: end;
  padding-right: 30px;
}
</style>
