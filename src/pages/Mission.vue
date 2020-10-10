<template>
  <div v-if="mission" class="mission-container">
    <div class="img-container" ref="img" :style="{ backgroundImage: bg_img }">
      <router-link to="/">
        <button class="go-home">˂</button>
      </router-link>
    </div>

    <div class="mission-data">
      <h1 class="card-title">{{ mission.name }}</h1>
      <p class="card-description">{{ mission.description }}</p>

      <a
        class="see-more-btn card-description"
        :href="get_link()"
        :hidden="!has_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mais
      </a>
    </div>
  </div>
  <div v-else class="mission-container empty">
    <btn-go-home />
  </div>
</template>

<script>
import BtnGoHome from "@/components/BtnGoHome";

function get_random_number(min, max) {
  return Math.floor(Math.random() * max + min);
}

export default {
  name: "Mission",

  components: {
    BtnGoHome
  },

  data() {
    return {
      mission: null,
      has_link: false,
      bg_img: ""
    };
  },

  mounted() {
    this.mission = this.$route.params.mission;
    this.$nextTick(() => {
      this.bg_img = `url(${this.get_random_img()})`;
    });
  },

  methods: {
    get_random_img() {
      const img_width = this.$refs.img.offsetWidth;
      const img_height = this.$refs.img.offsetHeight;
      const media_size = this.mission.media.flickr_images.length;

      return media_size > 0
        ? this.mission.media.flickr_images[get_random_number(0, media_size)]
        : `https://picsum.photos/id/974/${img_width}/${img_height}`;
    },

    get_link() {
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
@import "~@/styles/card.css";

.mission-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  text-align: center;
  background-color: burlywood;
}

.img-container {
  position: relative;
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.go-home {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  padding: 0 10px;
  border: 1px solid var(--black);
  color: white;
  background-color: var(--black);
  font-size: 32px;
  font-weight: 900;
}

.go-home:hover {
  color: var(--black);
  background-color: white;
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
