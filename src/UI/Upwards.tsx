import { ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Upwards: React.FC = () => {
  const [awayFromTop, setAwayFromTop] = useState<boolean>(false);
  useEffect(() => {
    const handleOffset = (): void => {
      if (window.scrollY > 200) setAwayFromTop(true);
      else setAwayFromTop(false);
    };

    window.addEventListener("scroll", handleOffset);

    return () => {
      window.removeEventListener("scroll", handleOffset);
    };
  }, []);
  return (
    awayFromTop && (
      <div
        className="fixed p-1 text-white rounded-full cursor-pointer bottom-4 right-4 bg-navBar animate-bounce"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span>
          <ArrowUpward />
        </span>
      </div>
    )
  );
};

export default Upwards;
