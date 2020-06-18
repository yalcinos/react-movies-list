import axios from "axios";

export const API_KEY = "532c8cbe5b5c3969e4eba86bf3ffcfda";

export const MOVIES_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});
