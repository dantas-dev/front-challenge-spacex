<template>
  <v-card
    color="light-blue lighten-1"
    class="fill-height"
  >
    <v-row
      class="fill-height"
      justify="center"
    >
      <v-col
        class="d-flex flex-column justify-center"
        cols="12"
        sm="4"
        v-if="!$apollo.loading"
      >
        <v-card-title
          primary-title
          class="title"
        >
          Last Launches
          <v-img
            src="@/assets/animat-rocket-color.gif"
            height="40px"
            width="50px"
            contain
            class="shrink rocket-icon"
          ></v-img>
        </v-card-title>
        <core-mission-item
          v-for="item in launchesPast"
          :key="item.id"
          :mission="item"
          v-show=" $vuetify.breakpoint.smAndUp || !missionExpanded.id "
        />
        <core-mission-card
          v-show="missionExpanded.id && $vuetify.breakpoint.xsOnly"
          :mission="missionExpanded"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="pt-10"
      >
        <transition
          name="slide"
          @enter="setTransition(true)"
          @after-leave="setTransition(false)"
        >
          <v-img
            class="rocket-sticky"
            src="@/assets/animat-rocket-color.gif"
            v-show="!missionExpanded.id && $vuetify.breakpoint.smAndUp "
            contain
            key="0"
            height="80vh"
          >
          </v-img>
        </transition>
        <div
          v-if="$apollo.loading"
          class="d-flex flex-column justify-center align-center"
        >
          <span
            class="overline white--text"
            style="font-size: 48px"
          >Loading...</span>
          <v-progress-circular
            :size="64"
            indeterminate
            color="white"
          ></v-progress-circular>
        </div>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import gql from "graphql-tag";
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "Dashboard",

  data: () => ({
    inTransition: true,
  }),
  computed: {
     ...mapGetters({ missionExpanded: 'missionExpanded' }),
  },
  methods: {
     ...mapMutations({ setTransition: 'SET_TRANSITION' }),
  },
  apollo: {
    launchesPast: gql`
      query {
        launchesPast(limit: 10, order: "field: id, direction: ASC") {
          mission_name
          launch_date_local
          id
          details
          links {
            article_link
            video_link
            flickr_images
          }
        }
      }
    `,
  },
};
</script>
