<template>
  <ul>
    <li v-for="item in items" :key="item.id" @click="item.id++">
      <div class="content">
        <b class="itemTitle">
          {{ item.message }}
          {{ item.id }}
        </b>
        <h5 class="description">
          {{ item.description }}
        </h5>
      </div>
      <div class="dateDiv">
        <i class="date">
          {{ item.date }}
        </i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          id: 0,
          message: "Vue",
          date: "04/10/2001",
          description:
            "s utilizar a diretiva v-for para renderizar uma lista de elementos com base nos dados de um Array. A diretiva requer uma sintaxe especial na forma de item in items, onde items é a fonte de dados e item é um apelid",
        },
        {
          id: 1,
          message: "JavaScript",
          date: "10/10/2010",
          description:
            "blocos v-for temos acesso completo às propriedades do escopo pai. Também há suporte a um segundo argumento opcional para o índice d",
        },
      ],
    };
  },
};
</script>

<style>
li {
  display: flex;
  border: solid 3px #dfe6ed;
  margin-inline: 10rem;
  height: 80px;
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
.description {
  color: var(--description-item);
  margin-top: 0px;
  font-weight: 600;
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
