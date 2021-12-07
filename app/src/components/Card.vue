<template>
  <div class="card col-sm-12 col-md-12 col-lg-12 mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ mission.name }}</h5>
      <ul class="list-unstyled mb-1">
        <li class="card-subtitle text-muted" :key="manufacturer" v-for="manufacturer in filterList(mission.manufacturers)">
          {{ manufacturer }}
        </li>
      </ul>
      <p v-if="truncate" class="mt-1 mb-0">{{ trunc(mission.description) }}</p>
      <p v-else class="mt-1 mb-0">{{ mission.description }}</p>
      <slot></slot>
      <router-link :to="linkRef" class="btn btn-sm btn-primary mt-3">{{ linkLabel }}</router-link>
    </div>
  </div>
</template>

<script>
const trunc = (input) => input && input.length > 5 ? `${input.substring(0, 120)}...` : input;
export default {
  name: 'Card',
  props: ['mission', 'linkRef', 'linkLabel', 'truncate'],
  methods: {
    trunc,
    filterList: (arr) => arr.filter((v) => v && v.id),
  },
};
</script>

<style src="./Card.css"></style>
