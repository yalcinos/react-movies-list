import { API_KEY, MOVIES_URL } from "../config/api_config";

export const getMovieList = async () => {
  try {
    const response = await MOVIES_URL.get("/now_playing", {
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
