import React, { useEffect } from "react";

import { RootState, store } from "../Store/store";

import { useAppDispatch, useAppSelector } from "../Store/hooks";
import {
  getNewReleaseMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../Services/moviesAPIs";
import {
  setNewReleaseMovies,
  setTopRatedMovies,
  setTrending,
} from "../Store/Features/moviesSlice";

import { movieCards } from "../utils/moviesInterfaces";
import MoviesLayout from "../UI/MoviesLayout";

const Home: React.FC = () => {
  const { trending, newReleaseMovies, topRatedMovies } = useAppSelector(
    (state: RootState) => state.movies
  );
  const dispatch = useAppDispatch();

  //// Array to be passed to the moviesLayout Component
  const moviesListsArr: { title: string; moviesArray: movieCards[] }[] = [
    { title: "Trending", moviesArray: trending },
    { title: "New Release", moviesArray: newReleaseMovies },
    { title: "Top Rated", moviesArray: topRatedMovies },
  ];

  //// I used useEffect to get movies after opening the home page with loader indicator
  //// before fetching data from API.

  useEffect(function () {
    async function fetchingData(): Promise<any> {
      //// Getting trending movies and showing them:
      const newRelease = await getNewReleaseMovies();
      if (newRelease.length) dispatch(setNewReleaseMovies(newRelease));
      //// Getting topRated movies:
      const topRated = await getTopRatedMovies();
      if (topRated.length) dispatch(setTopRatedMovies(topRated));
    }

    fetchingData();
  }, []);

  //=============================================================
  //=============================================================
  //=============================================================

  return (
    <div className="flex flex-col gap-2">
      <MoviesLayout moviesArray={moviesListsArr} />
    </div>
  );
};

export default Home;

export async function loader() {
  const result: movieCards[] = await getTrendingMovies();
  if (result.length) {
    store.dispatch(setTrending(result));
    return result;
  }
  return null;
}
