import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  // actionPayloadMovies,
  movieCards,
  myState,
} from "../../utils/moviesInterfaces";
// import { RootState } from "../store";

///// I used redux for caching .. I know it is not a good practice but I am using it for this project
///// It is better to use react query as I did on the details page

const initialState: myState = {
  trending: [], //// popular movies
  newReleaseMovies: [], ////upcoming movies
  topRatedMovies: [],
  searchQuery: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
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
  setNewReleaseMovies,
  setTopRatedMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
