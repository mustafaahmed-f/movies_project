import { Star } from "@mui/icons-material";
interface myProps {
  rating: number;
}

const MovieRating: React.FC<myProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 text-xs sm:text-base">
      <span className="flex items-center text-sm sm:text-base">
        <Star fontSize="inherit" />
      </span>{" "}
      {rating}
    </div>
  );
};

export default MovieRating;
