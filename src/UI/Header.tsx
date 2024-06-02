import { SearchOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { disableLink } from "../utils/disableLink";
import { useAppDispatch } from "../Store/hooks";
import { useEffect, useRef, useState } from "react";
import { setSearchQuery } from "../Store/Features/moviesSlice";

const headerTitle = {
  color: "#FF0000",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "0px 0px 2px #FF0000, 0px 0px 4px #FF0000, 0px 0px 6px #FF0000",
};

export default function Header() {
  const dispatch = useAppDispatch();
  const [inputVal, setInputVal] = useState<string>("");
  const location: ReturnType<typeof useLocation> = useLocation();
  const initialRender = useRef<boolean>(true);

  function handleSearch(e: any) {
    setInputVal(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  }

  //// useEffect to clear input value after destroying component
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setInputVal("");
      dispatch(setSearchQuery(""));
    }
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 px-3 py-5 sm:flex-row sm:gap-0 min-w-screen flex-nowrap sm:px-6 bg-navBar">
      <div className="w-fit sm:w-1/2">
        <Link
          to="/"
          style={headerTitle}
          className="cursor-pointer w-fit sm:pe-0 addShadowAnimation"
          onClick={disableLink}
        >
          Movies
        </Link>
      </div>
      <div className="flex flex-grow w-full text-black bg-white sm:w-1/2 rounded-xl">
        <input
          placeholder="Search movies ..."
          value={inputVal}
          onChange={(e) => handleSearch(e)}
          className="flex-grow px-2 py-2 text-base focus:outline-none rounded-xl"
        />
        <div className="px-1 my-auto sm:px-2 focus:outline-none">
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}
