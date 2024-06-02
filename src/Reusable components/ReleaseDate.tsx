import { CalendarMonth } from "@mui/icons-material";

interface myProps {
  date: string;
}

const ReleaseDate: React.FC<myProps> = ({ date }) => {
  return (
    <div className="flex items-center gap-1">
      <span>
        <CalendarMonth />
      </span>{" "}
      {date.split("-")[0]}
    </div>
  );
};

export default ReleaseDate;
