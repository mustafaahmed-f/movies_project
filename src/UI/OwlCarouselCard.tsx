import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import React from "react";
import MovieRating from "../Reusable components/MovieRating";
import ReleaseDate from "../Reusable components/ReleaseDate";
import WatchBtn from "../Reusable components/WatchBtn";

const mainImgURL = import.meta.env.VITE_IMG_URL;

const cardStyle: React.CSSProperties = {
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
      <div className="flex flex-row items-center justify-center w-full gap-2 font-semibold text-white sm:gap-3">
        <WatchBtn icon={<PlayCircleIcon />} title="Watch now" />
        <WatchBtn icon={<AccessTimeIcon />} title="Watch later" />
      </div>
      <div className="flex flex-col items-start gap-3 details sm:gap-4">
        <p className="font-bold"> {title}</p>
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-3 text-sm font-normal movieDetails">
            <ReleaseDate date={date} />

            <MovieRating rating={rating} />
          </div>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default OwlCarouselCard;
