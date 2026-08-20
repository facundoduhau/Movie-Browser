export const API_BASE_URL = "https://api.themoviedb.org/3";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const ENDPOINT_SORT_BY_POPULARITY = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
