<template>
  <div>
    <template>
      <div
        :key="card.id"
        v-for="(card, index) in this.$store.state.modinfo.cards"
      >
        <div
          class="info-card border with-shadow p-8"
          @click="
            ($store.state.modinfo.tab = 1), ($store.state.modinfo.index = index)
          "
        >
          <div class="title p-l-4">{{ card.mission_name }}</div>
          <div class="break-word p-l-4">
            {{ card.launch_site.site_name_long }}
          </div>
          <div class="date">
            <span>{{ card.launch_date_local | dateFormat("DD/MM/YYYY") }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
var moment = require("moment-timezone");
export default {
  name: "InfoCard",
  computed: {
    ...mapState(["cards"]),
  },

  methods: {
    fetchCard() {
      if (this.$store.state.modinfo.cards[0]) {
        //cached
      } else {
        this.$store.dispatch("fetchCard");
      }
    },
  },

  filters: {
    dateFormat: function (value, opts) {
      return moment(value).format(opts);
    },
  },

  mounted() {
    this.fetchCard();
  },
};
</script>

<style type="text/css" scoped src="./style.css"></style>

