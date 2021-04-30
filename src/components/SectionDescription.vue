<template>
  <section class="container-section">
    <div class="container-section-info">
      <p id="content-description">
        {{text}}
      </p>
      <img id="svg-rocket" src="@/assets/rocket.svg" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props:{
    description: String
  },
  setup(props){
    const text = ref(props.description)

    return { text }
  }
})
</script>

<style>
  .container-section{
    height: 9vh;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid var(--black);
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  #content-description{
    color: var(--black);
    font-size: 24px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
  }
  .container-section-info{
    display: flex;
    align-items: center;
  }
  #svg-rocket{
    margin-left: 10px;
    width: 24px;
  }
</style>