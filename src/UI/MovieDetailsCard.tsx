import GenresContainer from "../Reusable components/GenresContainer";
import MovieRating from "../Reusable components/MovieRating";
import ReleaseDate from "../Reusable components/ReleaseDate";
import { detailsTable } from "../utils/movieDetailsTableInterface";
import DetailsTable from "./DetailsTable";

interface myProps {
  movie: any;
  detailsTableObj: detailsTable;
}

const MovieDetailsCard: React.FC<myProps> = ({
  movie,
  detailsTableObj,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-5 sm:items-start sm:w-1/2">
      <p className="mb-3 text-lg font-bold">{movie.title}</p>
      <div className="flex flex-row flex-wrap gap-3 sm:items-center sm:gap-4 sm:flex-col md:flex-row">
        <div className="flex flex-wrap items-center gap-3">
          {movie.genres.map(
            (genre: { id: number; name: string }, i: number): JSX.Element => (
              <GenresContainer key={i} title={genre.name} />
            )
          )}
        </div>
        <div className="flex items-center gap-3 ">
          <MovieRating rating={movie.vote_average} />
          <ReleaseDate date={movie.release_date} />
        </div>
      </div>
      <p>{movie.overview}</p>
      <DetailsTable movieProp={detailsTableObj} />
    </div>
  );
};

export default MovieDetailsCard;
