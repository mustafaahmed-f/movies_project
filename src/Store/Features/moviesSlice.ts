import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  // actionPayloadMovies,
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
  youMayLikeMovies: [], //// MOvie Recommendations
  detailedMovies: [],
  searchQuery: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlaying(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setTrending(state, action: PayloadAction<movieCards[]>) {
      state.trending = action.payload;
    },
    setNewReleaseMovies(state, action: PayloadAction<movieCards[]>) {
      state.newReleaseMovies = action.payload;
    },
    setNewReleaseSeries(state, action: PayloadAction<movieCards[]>) {
      state.newReleaseSeries = action.payload;
    },
    setTopRatedMovies(state, action: PayloadAction<movieCards[]>) {
      state.topRatedMovies = action.payload;
    },

    setDetailedMovies(state, action: PayloadAction<movieDetails[]>) {
      state.detailedMovies = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setTrending,
  setNowPlaying,
  setDetailedMovies,
  setNewReleaseMovies,
  setNewReleaseSeries,
  setTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
