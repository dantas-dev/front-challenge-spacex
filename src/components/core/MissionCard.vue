<template>
  <v-card :class="$vuetify.breakpoint.xsOnly ? 'mx-2' : ''">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      v-if="mission.id && mission.links.flickr_images.length > 0"
    >
      <v-carousel-item
        v-for="(slide, i) in mission.links.flickr_images"
        :key="i"
        :src="slide"
      >
      <v-btn icon fab absolute right @click="$emit('clearTarget')"><v-icon>mdi-close</v-icon></v-btn>
      </v-carousel-item>
    </v-carousel>
    <v-img
        src="@/assets/placeholder.png"
        height="400"
        v-else
        
    ><v-btn icon fab absolute right @click="$emit('clearTarget')"><v-icon>mdi-close</v-icon></v-btn></v-img>
  <v-card-title class="justify-center">
   {{mission.mission_name}}
  </v-card-title>
  <v-card-text>
     <span>{{mission.details}}</span>
  </v-card-text>
     <div class="text-center pa-4"><v-btn color="secondary" class="fl" :href="link">See more</v-btn></div>
  </v-card>
</template>:src="item.src"

<script>
  export default {
    name: 'MissionCard',
    props: {
      mission: {
        type: Object,
        default: () => ({})
      },
    },
    data: () => ({
    }),
    computed: {
      link(){
        return this.mission?.links?.article_link ? this.mission.links.article_link : this.mission?.links?.video_link
      }
    },
  }
</script>
