import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { movieCards } from "../utils/moviesInterfaces";
import { getNowPlayingMovies } from "../Services/moviesAPIs";
import { store } from "../Store/store";
import { setNowPlaying } from "../Store/Features/moviesSlice";
import MainLoader from "./MainLoader";

export default function AppLayout() {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className=" main  py-5 flex flex-grow scroll-smooth scroll-my-1 ">
        {navigation.state === "loading" ? <MainLoader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export async function loader() {
  const result: movieCards[] = await getNowPlayingMovies();
  if (result.length) {
    store.dispatch(setNowPlaying(result));
    return result;
  }
  return null;
}
