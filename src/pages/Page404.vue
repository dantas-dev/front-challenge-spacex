<template>
  <div class="page-container">
    <h1>A página que você digitou não existe</h1>
    <btn-go-home />
  </div>
</template>

<script>
import BtnGoHome from "@/components/BtnGoHome";

export default {
  name: "Page404",

  components: {
    BtnGoHome
  }
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
</style>
