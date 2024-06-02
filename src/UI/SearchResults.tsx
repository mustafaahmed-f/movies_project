import { useEffect, useState } from "react";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import { movieCards } from "../utils/moviesInterfaces";
import MovieCard from "./MovieCard";
import { searchMovies } from "../Services/moviesAPIs";
import MainLoader from "./MainLoader";

const SearchResults: React.FC = (): JSX.Element => {
  const searchQuery = useAppSelector(
    (state: RootState) => state.movies
  ).searchQuery;
  const [loading, setLoading] = useState<boolean>(true);
  const [moviesArray, setMoviesArray] = useState<movieCards[]>([]);

  useEffect((): any => {
    let timeOut: ReturnType<typeof setTimeout> | null = null;

    async function fetchData(): Promise<void> {
      timeOut = setTimeout(async () => {
        try {
          setLoading(true);
          const results: movieCards[] = await searchMovies(searchQuery);
          if (results.length) setMoviesArray(results);
          setLoading(false);
        } catch (error: any) {
          setLoading(false);
          throw new Error(error);
        } finally {
          setLoading(false);
        }
      }, 1500);
    }

    fetchData();

    return () => {
      if (timeOut) clearTimeout(timeOut!);
    };
  }, [searchQuery]);

  //===============================================================================
  //===============================================================================
  //===============================================================================
  //===============================================================================

  return (
    <div className="px-4 py-1 sm:px-8 sm:py-2">
      {loading ? (
        <MainLoader />
      ) : moviesArray.length ? (
        <div className="grid grid-cols-[1fr_1fr] min-h-[400px] md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-[auto] sm:grid-rows-[auto] sm:grid-cols-[auto_auto_auto_auto] gap-1  sm:gap-2 md:gap-3 ">
          {moviesArray.map((movie) => (
            <MovieCard
              title={movie.title}
              id={movie.id}
              key={movie.id}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full py-6">
          <p>No movies were found</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
