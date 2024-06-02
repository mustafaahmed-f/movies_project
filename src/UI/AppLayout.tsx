import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import MainLoader from "./MainLoader";
import Upwards from "./Upwards";

export default function AppLayout() {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen p-0 m-0 max-w-screen ">
      <Header />
      <main className="flex flex-grow w-full py-4 overflow-x-hidden main scroll-smooth sm:py-8">
        {navigation.state === "loading" ? <MainLoader /> : <Outlet />}
      </main>
      <Footer />
      <Upwards />
    </div>
  );
}
