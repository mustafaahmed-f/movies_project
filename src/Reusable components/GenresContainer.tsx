interface myProps {
  title: string;
}

const GenresContainer: React.FC<myProps> = ({ title }) => {
  return (
    <div className="px-2 py-2 text-xs text-black bg-white rounded-md sm:text-sm md:text-base">
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default GenresContainer;
