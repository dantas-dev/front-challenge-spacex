<template>
  <div class="card" style="margin: 10px">
    <h5 class="card-header" style="font-size: 32px; font-weight: bold">
      {{ name }}
    </h5>
    <div class="card-body">
      <p class="card-text">
        {{ description }}
      </p>
      <div style="display: flex; justify-content: flex-end; padding-top: 20px">
        <p>
          {{
            date.substring(8, 10) +
            "/" +
            date.substring(5, 7) +
            "/" +
            date.substring(0, 4)
          }}
        </p>
      </div>
      <router-link :to="{ name: 'Mission', params: { slug: this.id } }">
        <a class="btn btn-primary">Saiba mais...</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    date: String,
    id: String,
  },
};
</script>

<style scoped>
#card-mission {
  max-width: 500px;
  border: solid 1px rgb(79, 28, 219);
  padding: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>