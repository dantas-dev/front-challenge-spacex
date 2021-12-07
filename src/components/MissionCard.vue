<template>
  <div class="card col-sm-12 col-md-12 col-lg-12 mb-3">
    <div v-if="!mission" class="card-body">
      <div class="alert alert-danger js-erro" role="alert">
        Falha ao Carregar a MISSÃO, o sistema não conseguiu localizar a missão que você estava procurando!
      </div>
      <router-link :to="{ name: 'missions' }" class="btn btn-sm btn-primary mt-3">Recomeçar</router-link>
    </div>
    <div v-else class="card-body">
      <h5 class="card-title">{{ mission.name }}</h5>
      <ul class="list-unstyled mb-1">
        <li class="card-subtitle text-muted" :key="manufacturer"
            v-for="manufacturer in filterManufactures(mission.manufacturers)">
          {{ manufacturer }}
        </li>
      </ul>
      <p v-if="truncate" class="mt-1 mb-0 js-description">{{ truncateCard(mission.description) }}</p>
      <p v-else class="mt-1 mb-0 js-description">{{ mission.description }}</p>
      <slot></slot>
      <router-link :to="linkRef" class="btn btn-sm btn-primary mt-3 js-link-ref">{{ linkLabel }}</router-link>
    </div>
  </div>
</template>

<script>
const truncateCard = (str) => str && str.length > 100 ? `${str.substring(0, 120)}...` : str;
export default {
  name: 'Card',
  props: {
    mission: {
      type: [Object, null],
      default: () => ({}),
      required: false,
    },
    linkRef: [String, Object],
    linkLabel: String,
    truncate: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    truncateCard,
    filterManufactures: (a) => Array.isArray(a) ? a.filter(m => !!m) : [],
  },
};
</script>

<style src="./MissionCard.css"></style>
