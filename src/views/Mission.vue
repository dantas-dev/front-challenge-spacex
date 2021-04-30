<template>
  <div class="about">
    <SectionDescription description="Mission"/>
    <router-link to="/">
      <Button text="Back"/>
    </router-link>
    
    <MenuMission />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SectionDescription from '../components/SectionDescription.vue'
import MenuMission from '../components/MenuMission.vue'
import Button from '../components/Button.vue'
export default defineComponent({
  components:{
    SectionDescription,
    MenuMission,
    Button
  }
})
</script>

<style>
 
</style>