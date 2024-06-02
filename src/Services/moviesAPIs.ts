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

export const getNewReleaseMovies = async (): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
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

export const getNewReleaseSeries = async (): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`
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

export const getTopRatedMovies = async (): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
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

export const getYouMayLikeMovies = async (
  id: number
): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`
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

export const searchMovies = async (query: string): Promise<movieCards[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
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
