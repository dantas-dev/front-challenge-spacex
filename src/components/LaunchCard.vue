<template>
    <div class="container-card">
      <div class="mission-name-card">
        <MissionTitle :text=info.mission_name />
      </div>
      <div class="mission-description-card">
        <MissionDescription :description=info.details />
      </div>
      <div class="mission-data-local">
        <p id="data-mission-info">
          {{info.launch_date_local}}
        </p>
      </div>
  </div>
  
  
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import MissionTitle from './MissionTitle.vue'
import MissionDescription from './MissionDescription.vue'

interface arrayProps{
  launch_date_local?: string,
  mission_name?: string,
  details?: string
}

export default defineComponent({
  props:{
    mission_name: String,
    mission_description: String,
    data_local: String
  },
  components:{
    MissionTitle,
    MissionDescription
  },
  setup(props){
    const info = reactive<arrayProps>({
      launch_date_local: props.data_local,
      mission_name: props.mission_name,
      details: props.mission_description
    })
  
    return {info}
  }
})
</script>

<style>
  .container-card{
    width: 23vw;
    height: 21vh;
    display: flex;
    flex-direction: column;
    box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    background-color: var(--white);
    padding: 5px 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 1280px) {
      .container-card {
        width: 300px;
      }
  } 
  .mission-name-card{
    height: 30%;
    display: flex;
    align-items: center;
  }
   

  .mission-description-card{
    height: 50%;
    overflow: hidden;
    text-decoration: ellipsis;
  }


  @media (max-width: 1280px) {
      #mission-description {
        font-size: 12px;
      }
      #mission-title{
        font-size: 14px;
      }
  } 

  .mission-data-local{
    height: 20%;
    display: flex;
    justify-content: flex-end;
  
  }
  #data-mission-info{
    color: var(--darkGray);
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-style: italic;
  }
</style>