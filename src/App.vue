<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "./styles/colors.css";
#app {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 100vh;
  min-height: 100vh;
  background-color: var(--background);
  text-align: center;
  color: #2c3e50;
  border: solid 2px transparent;
}
body {
  margin: 0px;
}
</style>
