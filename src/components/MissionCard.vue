<template>
  <article class="card-container" @click="$emit('click', mission)">
    <h2 class="card-title">{{ mission.name }}</h2>
    <p class="card-description">
      {{ mission.description.slice(0, 125) + "..." }}
    </p>
    <p class="card-date">{{ mission.date }}</p>
  </article>
</template>

<script>
export default {
  name: "MissionCard",

  props: ["mission"]
};
</script>

<style scoped>
@import "~@/styles/card.css";

.card-container {
  color: var(--light-black);
  cursor: pointer;
  transition: all 0.3s;
}

.card-container:hover {
  border-color: var(--black);
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
}

.card-title {
  margin-bottom: 5px;
}

.card-date {
  font-size: min(4vw, 1.05rem);
  font-style: italic;
}
</style>
