const MovieCardLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full gap-4 py-2">
      <span className="movieCardLoader"></span>
      <span className="movieCardLoader"></span>
      <span className="block movieCardLoader sm:hidden md:block"></span>
      <span className="block movieCardLoader sm:hidden md:block"></span>
    </div>
  );
};

export default MovieCardLoader;
