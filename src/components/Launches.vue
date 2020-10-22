<template>
  <div class="flex items-center bg-gray-200">
    <div class="flex-1"></div>
    <div class="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2">
      <h3 class="py-10 text-3xl">Last Lauches 🚀</h3>
      <div v-if="loading > 0">Loading...</div>
      <div v-else-if="launches" class="result apollo">
        <div
          v-for="(mission, index) in launches"
          :key="index"
          class="w-full h-auto mx-auto border-solid border-gray-500 rounded-lg bg-white shadow-lg px-5 pt-3 pb-5 mb-5 text-gray-800"
          style="min-width: 500px;"
          v-on:click="$modal.show('launch-detail'), launchDetail = mission"
        >
          <div class="w-full">
            <p class="text-xl text-indigo-500 text-left h-3 mb-5">{{ mission.mission_name }}</p>
            <p>{{ mission.details.length > 200 ? mission.details.substring(0, 200) + '...' : mission.details }}</p>
            <p class="text-right">{{ formatDate(mission.launch_date_local) }}</p>
          </div>
        </div>
      </div>
      <div v-else>No results found</div>
    </div>
    <div class="flex-1"></div>
    <custom-modal
      height="auto"
      style="overflow-y: scroll;"
      @closed="$emit('closed')"
      name="launch-detail"
    >
      <div v-if="launchDetail.links">
        <img :src="launchDetail.links.flickr_images" />
      </div>
      <p class="text-2xl text-indigo-500 text-center h-3 mb-5 py-5">{{ launchDetail.mission_name }}</p>
      <p class="text-xl text-gray-800 text-center mb-5">{{ launchDetail.details }}</p>
      <div class="flex items-center mb-5">
        <div class="flex-1"></div>
        <div class="flex-2 text-center">
          <button
            v-on:click="openLink(launchDetail.links.article_link ? aunchDetail.links.article_link : launchDetail.links.video_link)"
            class="flex 1 bg-gray-800 hover:bg-gray-500 text-white py-2 px-3 uppercase font-semibold text-2xs rounded"
            type="button"
          >See more</button>
        </div>
        <div class="flex-1"></div>
      </div>
    </custom-modal>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import moment from 'moment'

moment.locale('pt')

export default {
  name: 'Lauches',

  data () {
    return { launchDetail: {}, launches: [], loading: 0 }
  },
  apollo: {
    launches: {
      query: gql`
        query {
          launchesPast(limit: 10) {
            mission_name
            details
            launch_date_local
            links {
              article_link
              video_link
              flickr_images
            }
          }
        }
      `,
      update: data => data.launchesPast,
      loadingKey: 'loading'
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('DD/MM/YYYY')
    },
    openLink (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped>
</style>
