import { SearchOutlined } from "@mui/icons-material";

const headerTitle = {
  color: "#FF0000",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "0px 0px 2px #FF0000, 0px 0px 4px #FF0000, 0px 0px 6px #FF0000",
};

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-4 px-3 py-5 sm:flex-row sm:gap-0 min-w-screen flex-nowrap sm:px-6 bg-navBar">
      <div
        style={headerTitle}
        className="w-fit sm:pe-0 sm:w-1/2 addShadowAnimation"
      >
        Movies
      </div>
      <div className="flex flex-grow w-full text-black bg-white sm:w-1/2 rounded-xl">
        <input
          placeholder="Search movies ..."
          className="flex-grow px-2 py-2 text-base focus:outline-none rounded-xl"
        />
        <div className="px-1 my-auto sm:px-2 focus:outline-none">
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}
