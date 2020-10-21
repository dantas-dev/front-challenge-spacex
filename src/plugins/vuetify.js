import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/sass/main.scss'
Vue.use(Vuetify);

const theme = {
    primary: '#03A9F4',
    secondary: '#FB8C00',
  }
  
  export default new Vuetify({
    theme: {
      themes: {
        dark: theme,
        light: theme,
      },
    },
  })
