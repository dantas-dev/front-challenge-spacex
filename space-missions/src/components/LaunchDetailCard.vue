<template>
  <div class="container">
    <div class="card" style="width: 80%">
      <img
        :src="imgs[0] || default_image"
        class="card-img-top"
        alt="..."
        style="height: 800px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
        <div class="mt-5">
          <a :href="link" class="btn btn-primary">Saiba mais</a>
          <a href="/" class="btn btn-danger ml-2">voltar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    date: String,
    link: String,
    id: Number,
    imgs: [],
  },
  data() {
    return {
      default_image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/32CB/production/_107830031_artist_s_view_of_vega_carrying_aeolus.jpg",
    };
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