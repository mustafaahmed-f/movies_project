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
  topRatedMovies: [],
  youMayLikeMovies: [], //// MOvie Recommendations
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

    setTopRatedMovies(state, action: PayloadAction<movieCards[]>) {
      state.topRatedMovies = action.payload;
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
  setNewReleaseMovies,
  setTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
