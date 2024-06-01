import { SearchOutlined } from "@mui/icons-material";

const headerTitle = {
  color: "#FF0000",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "0px 0px 2px #FF0000, 0px 0px 4px #FF0000, 0px 0px 6px #FF0000",
};

export default function Header() {
  return (
    <div className="flex flex-nowrap items-center justify-between py-5 sm:px-6 px-2 w-screen">
      <div
        style={headerTitle}
        className="w-fit pe-4 sm:pe-0 sm:w-1/2 addShadowAnimation"
      >
        Movies
      </div>
      <div className="sm:w-1/2 flex-grow rounded-xl bg-white text-black flex w-fit">
        <input
          placeholder="Search movies ..."
          className="px-2 py-2 text-base flex-grow focus:outline-none rounded-xl"
        />
        <div className="my-auto px-2 focus:outline-none">
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}
