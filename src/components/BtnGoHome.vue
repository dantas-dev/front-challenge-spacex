<template>
  <router-link to="/">
    <button>Voltar para a página inicial</button>
  </router-link>
</template>

<script>
export default {
  name: "BtnGoHome"
};
</script>

<style scoped>
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
