import { movieCards } from "../utils/moviesInterfaces";

let apiKey = import.meta.env.VITE_API_KEY;
export const getNowPlayingMovies = async (): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const data = await response.json();

    return data.results.slice(0, 8);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getTrendingMovies = async (): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    } else {
      const data = await response.json();
      return data.results;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
