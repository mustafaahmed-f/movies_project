import { FacebookOutlined } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full py-2 bg-navBar">
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 sm:flex-row">
        <p>@copyrights : Mustafa Ahmed 2024</p>
        <div className="flex gap-2">
          <div className="no-underline cursor-pointer">
            <InstagramIcon />
          </div>
          <div className="no-underline cursor-pointer">
            <FacebookOutlined />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
