import { API_KEY, MOVIES_URL, TV_SHOWS_URL } from "../config/api_config";

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
