<template>
  <article class="card-container">
    <h2 class="card-title">Erro ao carregar dados do servidor</h2>
    <p class="card-description">Tente recarregar a página</p>
  </article>
</template>

<script>
export default {
  name: "MissionCardError"
};
</script>

<style scoped>
@import "~@/styles/card.css";

.card-container {
  border: none;
  background-color: rgba(255, 0, 0, 0.75);
}
</style>
