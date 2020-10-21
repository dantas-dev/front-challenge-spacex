<template>
  <v-card :class="$vuetify.breakpoint.xsOnly ? 'mx-2' : ''">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      v-if="missionExpanded.id && missionExpanded.links.flickr_images.length > 0"
    >
      <v-carousel-item
        v-for="(slide, i) in missionExpanded.links.flickr_images"
        :key="i"
        :src="slide"
      >
      <v-btn icon fab absolute right @click="changeMission({})"><v-icon>mdi-close</v-icon></v-btn>
      </v-carousel-item>
    </v-carousel>
    <v-img
        src="@/assets/placeholder.png"
        height="400"
        v-else
        
    ><v-btn icon fab absolute right @click="changeMission({})"><v-icon>mdi-close</v-icon></v-btn></v-img>
  <v-card-title class="justify-center">
   {{missionExpanded.mission_name}}
  </v-card-title>
  <v-card-text>
     <span>{{missionExpanded.details}}</span>
  </v-card-text>
     <div class="text-center pa-4"><v-btn color="secondary" class="fl" :href="link">See more</v-btn></div>
  </v-card>
</template>:src="item.src"

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'MissionCard',
    computed: {
      ...mapGetters({ missionExpanded: 'missionExpanded' }),
      link(){
        return this.missionExpanded?.links?.article_link ? this.missionExpanded.links.article_link : this.missionExpanded?.links?.video_link
      }
    },
    methods: {
      ...mapActions({ changeMission: 'changeMission' }),
    },
  }
</script>
