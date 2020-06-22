# Product Name
> List  movies and TV Shows with The Movie Database API using React.js




![](movies.gif)

## Installation

```sh
npm install
npm start
```
## Development setup

Create config folder inside of /src folder and create api_config.js. Paste the below code and add your **MOVIE DB API KEY**

```sh
import axios from "axios";

export const API_KEY = "YOUR MOVIDE DB API KEY";

export const MOVIES_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});
export const TV_SHOWS_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv",
});

export const SEARCH_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3/search",
});

```
This app was built using [MOIVE DB API](https://developers.themoviedb.org/3/getting-started/introduction).