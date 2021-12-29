<template>
  <div v-if="loading">Loading...</div>
  <ul v-else class="container">
    <h2 class="listTitle">
      Last Launches
      <i class="fas fa-rocket" />
    </h2>
    <li
      v-for="item in data"
      :key="item.id"
      @click="$router.push({ path: '/detailed/' + item.id })"
    >
      <div class="content">
        <h3 class="itemTitle">
          {{ item.mission_name }}
        </h3>
        <span class="details">
          {{ item.details }}
        </span>
      </div>
      <div class="dateDiv">
        <i class="date">
          {{ item.launch_date_local }}
        </i>
      </div>
    </li>
  </ul>
</template>

<script>
import { getLastLaunches } from "../services/comunication";
export default {
  name: "Home",
  setup() {
    const response = getLastLaunches();
    return response;
  },
};
</script>

<style scoped>
.listTitle {
  text-align: left;
  font-weight: bolder;
}
li {
  display: flex;
  border: solid 3px #dfe6ed;
  min-height: 80px;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  flex-direction: column;
  cursor: pointer;
}
.itemTitle {
  color: var(--title-item);
  margin: 0px;
  margin-bottom: 10px;
  font-weight: bold;
}
.details {
  color: var(--description-item);
  text-align: left;
  margin: 0px;
  font-weight: bold;
}
.dateDiv {
  align-self: flex-end;
  justify-self: flex-end;
}
.date {
  font-weight: 600;
}
.container {
  margin-inline: 10%;
}
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  align-items: flex-start;
}
</style>
