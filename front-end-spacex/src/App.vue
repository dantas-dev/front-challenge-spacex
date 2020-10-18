<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  
  width: 100%;
  height: 100%;

  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

button {
  background-color: white; /* Green */
  border-radius: 8px;
  color: white;
  padding: 16px 16px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;

  border: 2px solid #e7e7e7;
}

button:hover {
  background-color: #e7e7e7;
  border: 2px solid black;
}
/* CSS basic reset */
</style>
