<template>
  <div style="max-width: 90%; width: 720px; margin: 12px auto;">
    <h1 class="text-center mt-3 mb-3">Visualizar Missão</h1>
    <ApolloQuery :query="query" :variables="{id}">
      <template slot-scope="{ result: { loading, error, data } }">
        <span v-if="error">Error!</span>
        <span v-else-if="loading">Loading...</span>
        <div class="m-auto d-block" style="max-width: 90%; width: 720px;">
          <div v-if="data" class="row">
            <div :key="mission.id" v-for="mission in filterList(data.missions)" class="col-sm-12 col-md-12 col-lg-12 mb-3">
              <card :mission="mission" :link-ref="{name: 'missions'}" link-label="Voltar">
                <table class="table table-striped table-responsive-sm table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>
                        <b>Nacionalidade</b>
                      </th>
                      <th>
                        <b>Manufatura</b>
                      </th>
                      <th>
                        <b>Massa em Libras</b>
                      </th>
                      <th>
                        <b>Massa em Quilos</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="payload.id" v-for="payload in filterList(mission.payloads)">
                      <td>
                        {{ payload.nationality }}
                      </td>
                      <td>
                        {{ payload.manufacturer }}
                      </td>
                      <td>
                        {{ payload.payload_mass_lbs }} lb
                      </td>
                      <td>
                        {{ payload.payload_mass_kg }} kg
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-3">
                  <a class="card-link-circle card-link-circle-mini" :href="mission.wikipedia" target="_blank" title="WIKIPÉDIA">
                    <img src="/img/wikipedia.png">
                  </a>
                  <a class="card-link-circle card-link-circle-mini" :href="mission.twitter" target="_blank" title="TWITTER">
                    <img src="/img/twitter.png">
                  </a>
                  <a class="card-link-circle card-link-circle-mini" :href="mission.website" target="_blank" title="WEBSITE">
                    <img src="/img/site.png">
                  </a>
                </div>
              </card>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import {gql} from 'apollo-boost';
import Card from '@/components/Card';

const parseBoolean = (b) => b ? 'Sim' : 'Não';

export default {
  name: 'Mission',
  components: {Card},
  methods: {
    parseBoolean,
    filterList: (arr) => arr.filter((v) => v && v.id),
  },
  data() {
    return {
      id: this.$route.params.id,
      query() {
        return gql`query($id: ID!) {
          missions(find: {id: $id}) {
            description
            id
            manufacturers
            name
            twitter
            website
            wikipedia
            payloads {
              id
              manufacturer
              payload_type
              reused
              payload_mass_lbs
              payload_mass_kg
              nationality
            }
          }
        }`;
      },
    };
  },
};
</script>

