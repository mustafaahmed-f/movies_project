import { Star } from "@mui/icons-material";
interface myProps {
  rating: number;
}

const MovieRating: React.FC<myProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 ">
      <span>
        <Star fontSize="small" />
      </span>{" "}
      {rating}
    </div>
  );
};

export default MovieRating;
