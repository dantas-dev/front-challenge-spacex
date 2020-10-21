<template>
  <v-app>
      <Dashboard/>
  </v-app>
</template>

<script>
import Dashboard from './views/Dashboard';

export default {
  name: 'App',

  components: {
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>
