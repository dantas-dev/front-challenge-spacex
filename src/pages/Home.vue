<template>
  <div v-if="loading">Loading...</div>
  <ul v-else>
    <li
      v-for="item in list"
      :key="item.id"
      @click="$router.push({ path: '/detailed/' + item.id })"
    >
      <div class="content">
        <b class="itemTitle">
          {{ item.mission_name }}
        </b>
        <h5 class="details">
          {{ item.details }}
        </h5>
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
    const { data: list, loading } = getLastLaunches();
    return { list, loading };
  },
};
</script>

<style>
li {
  display: flex;
  border: solid 3px #dfe6ed;
  margin-inline: 10rem;
  min-height: 80px;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
  flex-direction: column;
  cursor: pointer;
}
.itemTitle {
  color: var(--title-item);
  margin-bottom: 10px;
  font-weight: bold;
}
.details {
  color: var(--description-item);
  margin-top: 0px;
  font-weight: 600;
  text-align: left;
}
.dateDiv {
  align-self: flex-end;
  justify-self: flex-end;
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
