import { useState } from "react";
import { movieCards } from "../utils/moviesInterfaces";
import MovieCard from "./MovieCard";
import { ArrowRight } from "@mui/icons-material";

interface myProps {
  title: string;
  movies: movieCards[];
}

const MoviesList: React.FC<myProps> = ({ title, movies }) => {
  const [viewAll, setViewAll] = useState<boolean>(false);
  const modifiedMoviesArr: movieCards[] = viewAll ? movies : movies.slice(0, 4);

  return (
    <div className="px-4 py-1 sm:px-8 sm:py-2">
      <div className="flex flex-row items-center justify-between mb-2">
        <p className="font-serif text-lg font-bold">{title}</p>
        {title !== "Now playing" && (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setViewAll(!viewAll)}
          >
            <span>{viewAll ? "View less" : "View all"}</span>
            <span
              className={` ${
                viewAll ? `animate-viewMore` : `animate-viewLess`
              }`}
            >
              <ArrowRight />
            </span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-[1fr_1fr] min-h-[400px] md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[auto] sm:grid-rows-[auto] sm:grid-cols-[auto_auto_auto_auto] gap-1  sm:gap-2 md:gap-3 ">
        {modifiedMoviesArr.map((movie) => (
          <MovieCard
            title={movie.title}
            id={movie.id}
            key={movie.id}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
