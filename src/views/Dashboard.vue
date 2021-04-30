<template>
  <div class="home">
    <SectionDescription description="Last Launches"/>
    <MenuLauches />
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionDescription from '../components/SectionDescription.vue'
import MenuLauches from '../components/MenuLauches.vue'


export default defineComponent({
  components:{
    SectionDescription,
    MenuLauches
  }
})
</script>

<style>
 
</style>
