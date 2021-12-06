<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <span v-if="error">Error!</span>
      <span v-else-if="loading">Loading...</span>
      <div v-if="data">
        <div :key="card.id" v-for="card in data.launchesPast">
          <div class="info-card border with-shadow p-8">
            <div class="title p-l-4">{{ card.mission_name }}</div>
            <div class="break-word p-l-4">
              {{ card.launch_site.site_name_long }}
            </div>
            <div class="date">
              <span>{{
                card.launch_date_local | dateFormat("DD/MM/YYYY")
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>


<script>
import { GET_CARDS } from "../../queries.js";
var moment = require("moment-timezone");
export default {
  card: "InfoCard",
  data() {
    return {
      query: GET_CARDS,
    };
  },

  methods: {},

  filters: {
    dateFormat: function (value, opts) {
      return moment(value).format(opts);
    },
  },
};
</script>

<style type="text/css" scoped>
.break-word {
  word-wrap: break-word;
}

.date {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  font-style: italic;
  margin-bottom: 10px;
}

.info-card {
  position: relative;
  margin: 10px;
  background-color: #fff;
  font-weight: 100;
  letter-spacing: 0.2px;
  min-height: 128px;
  max-width: 100%;
  text-align: left;
}

.info-card .title {
  padding: 5px;
  font-size: 18px;
  text-align: left;
  position: relative;
  color: #000000;
  font-weight: bold;
}

.border {
  border: 2px solid rgb(189, 190, 197);
}

.with-shadow {
  -webkit-box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
  -moz-box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.2);
}

.p-8 {
  padding: 8px;
}

.p-4 {
  padding: 4px;
}

.p-l-4 {
  padding-left: 4px;
}
</style>

