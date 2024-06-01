import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "./store.ts";

//// This is used to pre-define types of useDispatch and useSelector so
//// we don't need to specify their type with each call

export const useAppDispatch = useDispatch.withTypes<DispatchType>();
export const useAppSelector = useSelector.withTypes<RootState>();
