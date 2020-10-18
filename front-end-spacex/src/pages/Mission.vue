<template>
  <div v-if="mission" class="mission-container">
    <div class="img-container" ref="img" :style="{ backgroundImage: background_image }">
    </div>

    <div class="mission-data">
      <h1 class="card-title">{{ mission.name }}</h1>
      <p class="card-description">{{ mission.description }}</p>

      <button
        :href="setLink()"
        :hidden="!has_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mais
      </button>
      <router-link to="/">
        <home-button/>
      </router-link>
    </div>
  </div>
  <div v-else class="mission-container empty">
    <home-button />
  </div>
</template>

<script>
import HomeButton from "@/components/HomeButton";

function getImg(min, max) {
  return Math.floor(Math.random() * max + min);
}

export default {
  name: "Mission",
  components: {
    HomeButton
  },

  data() {
    return {
      mission: null,
      has_link: false,
      background_image: ""
    };
  },

  mounted() {
    this.mission = this.$route.params.mission; //Gets the data from params
    this.$nextTick(() => {
      this.background_image = `url(${this.setImage()})`;
    });
  },

  methods: {
    
    //Get random image from flickr
    setImage() {

      const images = this.mission.media.flickr_images.length;

      return images > 0 
        ? this.mission.media.flickr_images[getImg(0, images)]
        : `https://loremflickr.com/1200/500/spacex,rocket`; 
    },

  //Gets the article, video or presskit link
    setLink() {
      const link =
        this.mission.media.article_link ||
        this.mission.media.video_link ||
        this.mission.media.presskit;
        this.has_link = Boolean(link); 

      return link;
    }
  }
};
</script>

<style scoped>

.mission-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  text-align: center;
  background-color: white;
  color:black;
}

.img-container {
  position: relative;
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.btn{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

}

.mission-data {
  position: relative;
  height: 50%;
  padding: 10px 20px;
}

.card-description {
  color: var(--light-black);
  margin: 10px 0 40px;
}

.see-more-btn {
  padding: 10px 30px;
  color: var(--black);
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 7px;
  text-decoration: none;
}

.see-more-btn:hover {
  color: var(--white);
  background-color: var(--black);
}

.mission-container.empty {
  max-width: 100%;
  display: grid;
  place-items: center;
}
</style>