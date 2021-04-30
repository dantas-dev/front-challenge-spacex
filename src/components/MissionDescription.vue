<template>
  <p id="mission-description">{{txt}}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props:{
    description: String
  },
  setup(props){
    const txt = ref(props.description)
    return {txt}
  }
})
</script>

<style>
 
  #mission-description{
    color: var(--darkGray);
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-overflow: ellipsis;
  }

  @media (max-width: 1400px) {
    p#mission-description{
      font-size: 10px;
    }
  }
</style>