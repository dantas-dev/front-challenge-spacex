<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="../assets/logo.png" class="logo" alt="SpaceX" />
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: var(--dark);
  position: fixed;
  width: 100%;
  text-align: center;
  flex: 1;
}

nav {
  padding: 1rem;
}

.logo {
  width: 200px;
}
</style>
