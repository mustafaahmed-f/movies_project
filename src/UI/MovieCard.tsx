import MovieRating from "../Reusable components/MovieRating";

interface myProps {
  poster_path: string;
  title: string;
  vote_average: number;
}

const mainImgURL = import.meta.env.VITE_IMG_URL;

const MovieCard: React.FC<myProps> = ({ title, vote_average, poster_path }) => {
  return (
    <div className="flex flex-col w-auto h-full items-between">
      <div>
        <img src={`${mainImgURL}${poster_path}`} className="max-w-full" />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 py-2 text-xs text-center sm:gap-0 sm:text-start sm:flex-row sm:text-sm">
        <p>{title}</p>
        <MovieRating rating={vote_average} />
      </div>
    </div>
  );
};

export default MovieCard;
