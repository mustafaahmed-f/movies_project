import { useLoaderData } from "react-router-dom";
import { getMovieDetails, getYouMayLikeMovies } from "../Services/moviesAPIs";
import { movieCards, movieDetails } from "../utils/moviesInterfaces";

import { detailsTable } from "../utils/movieDetailsTableInterface";

import MovieDetailsCard from "../UI/MovieDetailsCard";
import MoviesList from "../UI/MoviesList";
import MovieCardLoader from "../UI/MovieCardLoader";
import { useQuery } from "@tanstack/react-query";

const imgBaseURL = import.meta.env.VITE_IMG_URL;

const Details: React.FC = (): JSX.Element => {
  const movie: any = useLoaderData();
  const detailsTableObj: detailsTable = {
    production_companies: movie.production_companies,
    genres: movie.genres,
    release_date: movie.release_date,
    original_language: movie.original_language,
  };

  const moviesArr = useQuery({
    queryKey: ["details", movie.id],
    queryFn: () => getYouMayLikeMovies(Number(movie.id)),
  });

  const moviesArray = moviesArr.data as movieCards[];

  // useEffect(() => {
  //   async function fetchingData(): Promise<any> {
  //     try {
  //       setLoading(true);
  //       const movies: movieCards[] = await getYouMayLikeMovies(movie.id);
  //       if (movies.length) setMoviesArray(movies);
  //       setLoading(false);
  //     } catch (error: any) {
  //       setLoading(false);
  //       throw new Error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchingData();
  // }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-3 px-4 sm:flex-row flex-nowrap sm:gap-3 md:gap-5 sm:px-8">
        <div className="flex justify-end sm:w-1/2 max-h-[600px]">
          <img src={imgBaseURL + movie.poster_path} className="w-full" />
        </div>
        <MovieDetailsCard movie={movie} detailsTableObj={detailsTableObj} />
      </div>
      <div className="py-6 mt-3">
        {moviesArr.status === "pending" ? (
          <MovieCardLoader />
        ) : moviesArray?.length ? (
          <MoviesList title={"You may alse like"} movies={moviesArray} />
        ) : (
          <div className="flex items-center justify-center py-7">
            <p className="text-lg text-center">No movies found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;

export async function loader({ params }: any): Promise<movieDetails | null> {
  try {
    const movie: movieDetails = await getMovieDetails(Number(params.movieID));
    if (movie) return movie;
  } catch (error: any) {
    throw new Error(error);
  }
  return null;
}
