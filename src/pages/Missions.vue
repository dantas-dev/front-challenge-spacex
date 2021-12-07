<template>
  <div>
    <h1 class="text-center mt-3 mb-3">Últimas Missões</h1>
    <ApolloQuery :query="query">
      <template slot-scope="{ result: { loading, error, data } }">
        <span v-if="error" class="error">
          <div class="alert alert-warning js-erro" role="alert">
            Falha ao Carregar as MISSÕES, tente novamente em alguns instantes!
          </div>
        </span>
        <span v-else-if="loading" style="color:#fff;font-size:142px;">Loading...</span>
        <div class="m-auto d-block" style="max-width: 90%; width: 720px;">
          <div v-if="data" class="row">
            <div :key="mission.id" v-for="mission in data.missions" class="col-sm-12 col-md-12 col-lg-12 mb-3">
              <card :mission="mission" :link-ref="mission.id" :truncate="true" link-label="Veja Mais"></card>
            </div>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import {gql} from 'apollo-boost';
import Card from '@/components/MissionCard';

const GET_MISSIONS = () => gql`
  {
    missions {
      id
      description
      manufacturers
      name
      twitter
      website
      wikipedia
    }
  }
`;

export default {
  name: 'Missions',
  components: {Card},
  data() {
    return {
      query: GET_MISSIONS,
    };
  },
};
</script>

