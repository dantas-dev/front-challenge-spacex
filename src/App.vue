<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/66108f52b32320faf592153ea557ef07?family=DIN+Next+LT+Arabic);
@import "./styles/colors.css";
@font-face {
  font-family: "DIN Next LT Arabic";
  src: url("//db.onlinewebfonts.com/t/66108f52b32320faf592153ea557ef07.eot");
  src: url("//db.onlinewebfonts.com/t/66108f52b32320faf592153ea557ef07.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/66108f52b32320faf592153ea557ef07.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/66108f52b32320faf592153ea557ef07.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/66108f52b32320faf592153ea557ef07.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/66108f52b32320faf592153ea557ef07.svg#DIN Next LT Arabic")
      format("svg");
}
#app {
  font-family: DIN Next LT Arabic, Arial, Avenir, Helvetica, sans-serif;
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
