import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { CalendarMonth, Star } from "@mui/icons-material";
import React from "react";

const mainImgURL = import.meta.env.VITE_IMG_URL;

const cardStyle: React.CSSProperties = {
  //   backgroundImage: `url('https://image.tmdb.org/t/p/w500/fqv8v6AycXKsivp1T5yKtLbGXce.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  height: "fit-content",
  width: "100%",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  padding: "30px",
  flexFlow: "column",
  gap: "2.5rem",
  minHeight: "400px",
  overflow: "hidden",
};

interface CardProps {
  title: string;
  description: string;
  rating: number;
  date: string;
  imgURL: string;
}

const OwlCarouselCard: React.FC<CardProps> = ({
  title,
  description,
  rating,
  date,
  imgURL,
}) => {
  return (
    <div
      style={{ ...cardStyle, backgroundImage: `url(${mainImgURL}${imgURL})` }}
    >
      <div className="flex  flex-row gap-2 items-center justify-center w-full sm:gap-3 text-white font-semibold">
        <button className="bg-movieColor outline rounded-sm outline-movieColor outline-offset-0 px-2 py-1 sm:px-3 sm:py-2 text-sm sm:text-base flex flex-row gap-1 sm:gap-2 items-center justify-center">
          Watch now{" "}
          <span>
            <PlayCircleIcon />
          </span>
        </button>
        <button className="bg-transparent outline rounded-sm outline-movieColor px-2 py-1 sm:px-3 sm:py-2 flex flex-row gap-1 sm:gap-2 items-center justify-center">
          Watch later
          <span>
            <AccessTimeIcon />
          </span>
        </button>
      </div>
      <div className="details flex flex-col items-start sm:gap-4 gap-3">
        <p className="font-bold"> {title}</p>
        <div className="flex items-center justify-start">
          <div className="movieDetails flex gap-3 items-center font-normal text-sm">
            <div className="flex items-center gap-1">
              <span>
                <CalendarMonth />
              </span>{" "}
              {date.split("-")[0]}
            </div>

            <div className="flex items-center gap-1">
              <span>
                <Star />
              </span>{" "}
              {rating}
            </div>
          </div>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default OwlCarouselCard;
