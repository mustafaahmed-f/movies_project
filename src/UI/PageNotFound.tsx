import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto bg-gray-100">
      <h1 className="mb-4 text-5xl font-bold text-gray-800">404</h1>
      <h2 className="mb-2 text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 mt-6 text-white transition bg-blue-500 rounded hover:bg-blue-600"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
