import {
  API_KEY,
  MOVIES_URL,
  TV_SHOWS_URL,
  SEARCH_URL,
} from "../config/api_config";

export const getMovieList = async (category) => {
  try {
    const response = await MOVIES_URL.get(`/${category}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const movies = response.data.results;
    return movies;
  } catch (error) {
    throw error;
  }
};

export const getTvShowList = async (category) => {
  try {
    const response = await TV_SHOWS_URL.get(`/${category}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const movies = response.data.results;
    return movies;
  } catch (error) {
    throw error;
  }
};

export const getSearchResults = async (type, searchValue) => {
  try {
    const response = await SEARCH_URL.get(`/${type}`, {
      params: {
        api_key: API_KEY,
        query: searchValue,
      },
    });
    const movies = response.data.results;
    console.log(movies);
    return movies;
  } catch (error) {
    throw error;
  }
};
