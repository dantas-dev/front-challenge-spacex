![Logo da SpaceX](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/2560px-SpaceX-Logo.svg.png)
# SPACEX APP
DEMONSTRAÇÃO ONLINE: [spacex.marcusyoda.com.br](https://spacex.marcusyoda.com.br/#/).  

[![](https://img.shields.io/github/languages/code-size/badges/shields.svg)](https://github.com/marcusyoda/front-challenge-spacex)
[![](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/marcusyoda/front-challenge-spacex)
![GitHub Repo stars](https://img.shields.io/github/stars/marcusyoda/front-challenge-spacex)

Nosso aplicativo é pra quem gosta de acompanhar as missões da SpaceX.
Ao acessar a Home, você visualiza nossa Dashboard com a lista das últimas missões:  
![Dashboard do APP](https://github.com/marcusyoda/front-challenge-spacex/blob/main/demo-dashboard.png)    

Você também pode clicar em `Veja Mais`e visualizar detalhes da missão:  
![Dashboard do APP](https://github.com/marcusyoda/front-challenge-spacex/blob/main/demo-mission-single.png)

## Integração
Através de consultas em tempo real, trazemos para você a lista das últimas missões.  
Se precisar, pode consultar detalhes de cada missão!  
Saiba mais em: [API SpaceX Land](https://api.spacex.land/graphql/)  

## Requerimentos
* Node `v14+`;  
* NPM `v8+`;  

## Rodando o projeto
Instale as dependências com o NPM:
```bash
npm run install
```
Inicie o projeto:
```bash
npm run serve
```
Agora você pode acessar o sistema em: <http://localhost:8080>

## Tecnologias
Optei por utilizar o recomendando no desafio.  
Escolhi o VueJS 2, por ter um repertório maior na comunidade. Dessa forma, evitei imprevistos.  


## Funcionalidade/Tempo extra
Focado em produzir o melhor resultado, estudei o ciclo de desenvolvimento de um app VUE de ponta a ponta.
Usei o tempo extra para fazer a build DOCKER do aplicativo e disponibilizar uma versão online.
