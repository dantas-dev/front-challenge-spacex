<template>
  <LaunchDetailCard
    :imgs="launch.links.flickr_images"
    :name="launch.mission_name"
    :description="launch.details"
    :date="launch.launch_date_local.substring(0, 10)"
    :link="launch.links.video_link"
  />
</template>

<script>
import axios from "axios";
import LaunchDetailCard from "../components/LaunchDetailCard.vue";
export default {
  name: "App",
  components: { LaunchDetailCard },
  data() {
    return {
      launch: {},
    };
  },
  created() {
    console.log(this.$route.params);
    axios({
      url: "https://api.spacex.land/graphql/",
      method: "post",
      data: {
        query: `
        
        {
  launch(id: ${this.$route.params.slug}) {
    id
    details
    launch_date_local
    launch_date_unix
    launch_date_utc
    launch_site {
      site_id
      site_name
      site_name_long
    }
    rocket {
      rocket_name
      rocket_type
    }
    links {
      article_link
      mission_patch
      flickr_images
      presskit
      mission_patch_small
      reddit_launch
      reddit_campaign
      reddit_media
      reddit_recovery
      video_link
      wikipedia
    }
    mission_id
    mission_name
    ships {
      id
    }
  }
}

      

`,
      },
    }).then((res) => {
      console.log(res.data.data.launch);
      this.launch = res.data.data.launch;
    });
  },
};
</script>
