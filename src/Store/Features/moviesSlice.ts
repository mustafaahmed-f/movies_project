import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  actionPayloadMovies,
  movieCards,
  movieDetails,
  myState,
} from "../../utils/moviesInterfaces";
// import { RootState } from "../store";

const initialState: myState = {
  nowPlayingMovies: [],

  trending: [], //// popular movies
  newReleaseMovies: [], ////upcoming movies
  newReleaseSeries: [],
  topRatedMovies: [],
  youMayLikeMovies: [],
  detailedMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlaying(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setMovies: {
      prepare: (
        recentlyUpdatedMovies: movieCards[],
        trending: movieCards[],
        newReleaseMovies: movieCards[],
        newReleaseSeries: movieCards[],
        topRatedMovies: movieCards[],
        youMayLikeMovies: movieCards[]
      ) => {
        return {
          payload: {
            recentlyUpdatedMovies,
            trending,
            newReleaseMovies,
            newReleaseSeries,
            topRatedMovies,
            youMayLikeMovies,
          },
        };
      },
      reducer: (state, action: PayloadAction<actionPayloadMovies>) => {
        state.trending = action.payload.trending;
        state.newReleaseMovies = action.payload.newReleaseMovies;
        state.newReleaseSeries = action.payload.newReleaseSeries;
        state.topRatedMovies = action.payload.topRatedMovies;
        state.youMayLikeMovies = action.payload.youMayLikeMovies;
      },
    },
    setDetailedMovies(state, action: PayloadAction<movieDetails[]>) {
      state.detailedMovies = action.payload;
    },
  },
});

export const { setMovies, setNowPlaying, setDetailedMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
