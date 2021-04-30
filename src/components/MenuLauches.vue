<template>
  <div class="menu-launches" >
    <div id="list-mission" v-for="item in dataCard.launchesPast" :key="item.id">
      <router-link :to=handlePathMission(item.id)>
        <LaunchCard :mission_name=item.mission_name :mission_description=handleDetails(item.details) :data_local=handleDateLocal(item.launch_date_local) />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "@vue/runtime-core";
import LaunchCard from '../components/LaunchCard.vue'
import { queryLauchesPast } from '../graphql/query/LauchesPast'
import api from '../services/api'

interface arrayProps{
  id: string,
  launch_date_local: string,
  mission_name: string,
  details: string
}

interface dataCardProps{
  launchesPast: arrayProps[]
}

export default defineComponent({
  components:{
    LaunchCard
  },
  setup(){
    const dataCard = reactive<dataCardProps>({
      launchesPast: []
    })

    function handleDetails(item: string): string{
      if(!item){
        return "Information not found."
        
      } 
      else{
          return `${item.slice(0, 93)}...`
      }
    }

    function handleDateLocal(item: string): string{
      const aux = item.slice(0, 10).replaceAll('-', '/');

      return aux;
    }

    function handlePathMission(item: string): string{
      return `/mission/${item}`
    }

    watchEffect(() =>{
      api.query({
        query: queryLauchesPast
      }).then((lauches) =>{
        dataCard.launchesPast = lauches.data.launchesPast
        /* console.log(dataCard.launchesPast[0].id) */
      }).catch((error) =>{
        console.error(error)
      })
    })

    return { dataCard, handleDetails, handleDateLocal, handlePathMission }
  }
})
</script>

<style>
 .menu-launches {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #list-mission:hover{
    cursor: pointer;
  }
</style>