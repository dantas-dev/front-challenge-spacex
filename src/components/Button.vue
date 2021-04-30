<template>
  <div>
    <button class="button-click">
      <p id="info-button">
        {{txt}}
      </p>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props:{
    text: String
  },
  setup(props){
    const txt = ref(props.text)

    return {txt}
  }
})
</script>

<style>
  .button-click{
    width: 100px;
    height: 35px;
    border: none;
    background-color: var(--black);
  }
  .button-click:hover{
    cursor: pointer;
  }
  .button-click:focus{
    outline: none;
  }

  #info-button{
    color: var(--white);
  }

  @media (max-width: 1400px){
    .button-click{
      width: 80px;
      height: 35px;
    }

  }
</style>