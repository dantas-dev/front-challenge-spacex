<template>
  <p id="mission-title">
    {{txt}}
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
    text: String
  },

  setup(props){
    const txt = ref(props.text)

    return {txt}
  }
})
</script>

<style>
  #mission-title{
    color: var(--black);
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
  }
</style>