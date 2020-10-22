# SolarView - SpaceX Challenge

## BEFORE START:

1. Clone the repository
  * `git clone git@github.com:Gui-Alucard/front-challenge-spacex.git`.
  * Go to the cloned project directory:
    * `cd spacex-solarview`

2. IF NECESSARY: Install dev dependencies and go to Setup instructions
  * To install the dependencies, run:
    * `npm install`

## Setup instructions

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

---
## About the Code
---

1. Here is my Work Space on VSCode
  * I like to create different folders as you can see.
![WorkSpace](spacex-solarview/src/styles/workSpace.png)

2. Here is how I am using Apollo's Client and the BrowserRouter
  * usually with a unique end-point.
  * routing the main page and mission detail.
![App.js](spacex-solarview/src/styles/apolloClient.png)

3. Here is how I am using the GraphQL madeed query
  * I tried use the query `find` but it seems to be some problem returning a empty array
  * That make me use filter's and map's HOF at MissionDetails.js
![GraphQL use](spacex-solarview/src/styles/graphQL.png)

4. No less important, pallete color for this project
![GraphQL use](spacex-solarview/src/styles/palleteColor.png)

#### Technologies

 - I decided to use React and Apollo following the official documentation of GraphQL<br>
 plus, it is my most familiar Technologies!

#### Are there any improvements

 - Code refactoring is always a learning opportunity and that’s something I don’t refuse.
  * I am looking forward to working with programming and always open to learning new technologies<br>
  as was the case with this recent GraphQL.

#### What would I do differently

 - I would probably add RTL tests and instead of adding external links to videos,<br>
 I would incorporate it into the site.