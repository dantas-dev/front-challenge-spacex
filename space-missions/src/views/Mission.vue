<template>
<div>
 <LaunchDetailCard
    :imgs="launch.links.flickr_images"
    :name="launch.mission_name"
    :description="launch.details"
    :date="launch.launch_date_local.substring(0, 10)"
    :link="launch.links.video_link"
  />
</div>
 
  
</template>

<script>
//import axios from "axios";
import LaunchDetailCard from "../components/LaunchDetailCard.vue";
import gql from 'graphql-tag'

export default {
  name: "App",
  components: { LaunchDetailCard },

  data() {
    return {
      launch: {},
      req:this.$route.params.slug
    };
  }, 
 
  apollo: {
  // Query with parameters
    // gql query
    launch(){
      return gql`
{
  launch(id:${this.$route.params.slug}) {
    id
    details
    links {
      flickr_images
      video_link

    }
    launch_date_unix
    launch_date_local
    launch_date_utc
    launch_site {
      site_name
    }
    launch_success
    launch_year
    rocket {
      rocket_name
    }
    mission_name
  }
}



 `
    } ,
    // Static parameters
    variables(){
      return{
         Id: this.$route.params.slug,
      }
     
    },
 
}
};
</script>
