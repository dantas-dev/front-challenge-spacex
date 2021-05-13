<template>
  <main>
    <h1>Last launches <font-awesome-icon icon="rocket" /></h1>
    <!-- component cardlist -->
    <div class="cardlist">
      <router-link to="/mission" class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </router-link>
      <div class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </div>
      <div class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </div>
      <div class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </div>
      <div class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </div>
      <div class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </div>
      <div class="card">
        <h4>Mission name</h4>
        <p>dasdiasjdioasjdoiadisajdiasjdiojasdijaidjasijdaisjdoaisdjaisdj.</p>
        <span>20/04/2020</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
main {
  /* background-color: var(--gray-100); */

  background-image: url("../assets/mission_background.jpg");
  padding-top: 5rem;
  min-height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  color: var(--gray-200);
  text-align: center;
  text-transform: capitalize;
}
.cardlist {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.card {
  /* background-color: var(--white); */
  background-color: var(--gray-50);
  margin: 1rem;
  padding: 1rem;
  border: var(--gray-200) solid 2px;
  border-radius: 0.5rem;
}
.card h4 {
  font-size: 1.2rem;
}
.card p {
  margin: 1rem 0 1rem 0;
}
.card span {
  float: right;
  font-style: italic;
}
</style>
