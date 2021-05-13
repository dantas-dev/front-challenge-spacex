<template>
  <main>
    <section class="container">
      <img src="https://i.imgur.com/NHsx95l.jpg" alt="Image" />
      <h1>Mission name</h1>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado. Se
        popularizou na década de 60, quando a Letraset lançou decalques contendo
        passagens de Lorem Ipsum, e mais recentemente quando passou a ser
        integrado a softwares de editoração eletrônica como Aldus PageMaker.
      </p>
      <a href="#" target="_blank" rel="noopener noreferrer">See more</a>
    </section>
  </main>
</template>

<script>
export default {
  name: "Mission",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 1140px;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
}
img {
  width: 100%;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  font-size: 1.8rem;
  text-align: center;
}
p {
  text-align: justify;
  padding: 1rem;
}
a {
  display: flex;
  align-self: center;
  text-align: center;
  border: 2px solid gray;
  padding: 1rem;
}
a:hover {
  background-color: var(--gray-800);
  color: var(--white);
}
</style>
