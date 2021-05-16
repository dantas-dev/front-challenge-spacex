<template>
  <main>
    <section class="container">
      <ApolloQuery
        :query="
          (gql) => gql`
            query LaunchQuery($id: ID!) {
              launch(id: $id) {
                mission_name
                details
                links {
                  video_link
                }
                ships {
                  name
                  image
                }
              }
            }
          `
        "
        :variables="{ id }"
      >
        <template v-slot="{ result: { loading, error, data } }">
          <!-- Loading -->
          <div v-if="loading" class="loading apollo">Loading...</div>

          <!-- Error -->
          <div v-else-if="error" class="error apollo">An error occurred</div>

          <!-- Result -->
          <div v-else-if="data" class="container">
            <div v-if="data.launch.ships.length >= 1">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                  v-for="ship in data.launch.ships"
                  :key="ship.name"
                >
                  <img :src="ship.image" :alt="ship.name" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>
            <div v-else>
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                  <span>With no images assigned to the mission.</span>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>
            <h1>{{ data.launch.mission_name }}</h1>
            <p v-if="data.launch.details">{{ data.launch.details }}</p>
            <p v-else>With no details assigned to the mission.</p>
            <a
              :href="data.launch.links.video_link"
              target="_blank"
              rel="noopener noreferrer"
              >See more</a
            >
          </div>

          <!-- No result -->
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </ApolloQuery>
    </section>
  </main>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Mission",
  data() {
    return {
      id: this.$route.params.id,
      isLoading: true,
      fullPage: true,
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/carousel.scss";
</style>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 1140px;
  max-width: 100%;
  padding-top: 1.7rem;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 0.8rem;
  margin-left: auto;
  margin-right: auto;
}
img {
  width: 100%;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  font-size: 1.8rem;
  text-align: center;
  padding-top: 1rem;
}
p {
  text-align: justify;
  padding: 1rem;
}
a {
  display: flex;
  align-self: center;
  text-align: center;
  justify-self: center;
  justify-content: center;
  border: 2px solid var(--gray-800);
  padding: 1rem;
  transition: 0.3s;
}
a:hover {
  background-color: var(--gray-800);
  color: var(--white);
}
</style>
