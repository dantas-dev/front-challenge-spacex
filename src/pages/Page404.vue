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
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
}

h1 {
  color: var(--black);
}

button {
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
