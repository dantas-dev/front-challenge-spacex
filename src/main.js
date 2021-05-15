import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createProvider } from "./vue-apollo";

library.add(faRocket);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
