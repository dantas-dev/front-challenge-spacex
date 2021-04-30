<template>
  <div class="menu-mission" :key="dataMission.launch.id">
    <div id="card">
      <div class="photo-container">
        <img id="photo-rocket" :src=dataMission.launch.links.flickr_images[0] />
      </div>
      <div class="container-info">
        <div id="mission-title-container">
          <MissionTitle :text=dataMission.launch.mission_name />
        </div>
        <div id="description-container">
          <MissionDescription :description=dataMission.launch.details />
        </div>

        <div id="button-container">
          <a :href=dataMission.launch.links.video_link target="_blank">
            <Button text="See more"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent,  reactive, watchEffect } from "@vue/runtime-core";
import MissionTitle from './MissionTitle.vue'
import MissionDescription from './MissionDescription.vue'
import {queryLauch} from '../graphql/query/Launch'
import Button from '../components/Button.vue'
import api from '../services/api'

interface missionProps{
  id: string,
  details: string
  links: {
    video_link: string
    flickr_images: Array<string>
  }
  mission_name: string
}

interface dataMissionProps{
  launch: missionProps
}

export default defineComponent({
  components:{
    MissionTitle,
    MissionDescription,
    Button
  },
  setup(){
    const dataMission = reactive<dataMissionProps>({
      launch:{
        id: "", 
        details: "", 
        links: {
          video_link: "", flickr_images: []
          }, 
        mission_name: ''
      }
    })

    function getQueryParamnsId() {
      const id = window.location.pathname.split('/')[2]
      return id
    }

    watchEffect(() =>{
      api.query({
        query: queryLauch(getQueryParamnsId())
      }).then((lau) => {
        dataMission.launch = lau.data.launch
        console.log(dataMission.launch.links.video_link)
      })
    })

    return { dataMission }
  }
})
</script>

<style>
  .menu-mission{
    display: flex;
    justify-content: center;
  }

  #card{
    width: 33vw;
    height: 68vh;
    background-color: var(--white);
    border: 2px solid var(--black);
  }

  .photo-container{
    height: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:  4%;
  }

  #photo-rocket{
    width: 250px;
    height: 100%;
  }

  .container-info{
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
  }

  #mission-title-container{
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #description-container{
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #button-container{
    height: 25%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1400px) {
    p#card{
      width: 37vw;
      height: 65vh;
    }
  }

</style>