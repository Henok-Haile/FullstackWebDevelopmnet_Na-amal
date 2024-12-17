import axios from "axios";

const API_KEY = "5e6645b1";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
        params: {
            s: query,
            apikey: API_KEY,
        },
    });
    return response.data;
    }
  catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};