<template>
  <div id="name">
    <b>{{ name }}</b>
    <h4>{{ description }}</h4>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    name: String,
    description: String,
  },
};
</script>