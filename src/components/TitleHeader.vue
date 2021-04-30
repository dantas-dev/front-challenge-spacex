<template>
    <p id="title-header-info">{{title}}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props:{
    text: String
  },
  setup(props){
    const title = ref(props.text);

    return {title}
  }
})
</script>

<style>
  #title-header-info {
    color: var(--black);
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 28px;
  }
</style>