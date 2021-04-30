<template>
  <div class="container-header">
    <div class="header-main">
      <div class="header-title">
        <TitleHeader text="Launches"/>
      </div>
      <div class="header-logo">
        <LogoSpaceX />
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoSpaceX from './LogoSpaceX.vue'
import TitleHeader from './TitleHeader.vue'

export default defineComponent({
  components: {
    LogoSpaceX,
    TitleHeader
  },
  setup(){

  }
})
</script>

<style>
  .container-header {
    height: 15vh;
    display: flex;
    justify-content: center;
  }
  .header-main{
    display: flex;
    justify-content: space-between;
  }
  .header-title{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8px;
    padding-right: 20px;
  }
  .header-logo{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
  }
  .header-data{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
</style>