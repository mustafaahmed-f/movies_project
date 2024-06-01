import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Store/Features/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

//// used to get the type of useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
