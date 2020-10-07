<template>
  <div class="page-container">
    <h1>A página que você digitou não existe</h1>
    <router-link to="/">
      <button>Voltar para a página inicial</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Page404"
};
</script>

<style scoped>
.page-container {
  height: 100%;
  display: grid;
  place-items: center;
  align-content: center;
}

button {
  --black: rgba(0, 0, 0, 0.8);
  --white: rgba(230, 230, 230);
  font-size: 1.1rem;
  padding: 10px 30px;
  margin-top: 30px;
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 10px;
}

button:hover {
  color: var(--white);
  background-color: var(--black);
}
</style>
