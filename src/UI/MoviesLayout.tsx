import { movieCards } from "../utils/moviesInterfaces";
import MovieCardLoader from "./MovieCardLoader";
import MoviesList from "./MoviesList";

interface myProps {
  moviesArray: { title: string; moviesArray: movieCards[] }[];
}

const MoviesLayout: React.FC<myProps> = ({ moviesArray }): React.ReactNode => {
  return moviesArray.map((movieObj, i) => {
    return (
      <div key={i}>
        {movieObj.moviesArray.length ? (
          <MoviesList title={movieObj.title} movies={movieObj.moviesArray} />
        ) : (
          <MovieCardLoader />
        )}
        {i !== moviesArray.length - 1 && <hr className="border-navBar" />}
      </div>
    );
  });
};

export default MoviesLayout;
