import { CalendarMonth } from "@mui/icons-material";

interface myProps {
  date: string;
}

const ReleaseDate: React.FC<myProps> = ({ date }) => {
  return (
    <div className="flex items-center gap-1 text-xs sm:text-base">
      <span className="flex items-center text-sm sm:text-base">
        <CalendarMonth fontSize="inherit" />
      </span>{" "}
      {date.split("-")[0]}
    </div>
  );
};

export default ReleaseDate;
