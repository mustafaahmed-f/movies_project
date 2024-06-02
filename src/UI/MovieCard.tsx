import { Link } from "react-router-dom";
import MovieRating from "../Reusable components/MovieRating";

interface myProps {
  poster_path: string;
  title: string;
  vote_average: number;
  id: number;
}

const mainImgURL = import.meta.env.VITE_IMG_URL;

const MovieCard: React.FC<myProps> = ({
  title,
  vote_average,
  poster_path,
  id,
}) => {
  return (
    <Link
      to={`/details/${id}`}
      className="flex flex-col justify-between w-auto h-full items-between"
    >
      <div className="h-full">
        <img src={`${mainImgURL}${poster_path}`} className="h-full" />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 py-2 text-xs text-center md:text-base sm:gap-0 sm:text-start sm:flex-row sm:text-xs">
        <p>{title}</p>
        <MovieRating rating={vote_average} />
      </div>
    </Link>
  );
};

export default MovieCard;
