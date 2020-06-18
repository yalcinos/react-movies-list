import { API_KEY, MOVIES_URL } from "../config/api_config";

export const getMovieList = async () => {
  try {
    const response = await MOVIES_URL.get("/now_playing", {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(response.data.results);
  } catch (error) {}
};
