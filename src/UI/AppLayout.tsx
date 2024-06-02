import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import MainLoader from "./MainLoader";
import Upwards from "./Upwards";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import SearchResults from "./SearchResults";

export default function AppLayout() {
  const navigation = useNavigation();
  const searchQuery = useAppSelector(
    (state: RootState) => state.movies
  ).searchQuery;

  return (
    <div className="flex flex-col min-h-screen p-0 m-0 max-w-screen ">
      <Header />
      <main className="flex flex-grow w-full py-4 overflow-x-hidden main scroll-smooth sm:py-8">
        {navigation.state === "loading" ? (
          <MainLoader />
        ) : searchQuery ? (
          <SearchResults />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
      <Upwards />
    </div>
  );
}
