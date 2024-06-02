interface myProps {
  title: string;
}

const GenresContainer: React.FC<myProps> = ({ title }) => {
  return (
    <div className="px-1 py-2 text-black bg-white rounded-md">
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default GenresContainer;
