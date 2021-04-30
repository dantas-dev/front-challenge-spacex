<template>
  <Header />
  <div id="nav">
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  components:{
    Header
  }
})
</script>


<style >
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html{
    background-color: var(--background);
    padding: 0 4.5vw;
  }
  :root{
    --blue: #03BFFE;
    --gray:  #f2f2f2;
    --darkGray: rgb(168, 168, 168);
    --black:  #151515;
    --white: #ffff;
    --background: rgb(237, 241, 245);
    }
</style>
