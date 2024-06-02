import React from "react";
import { useNavigate } from "react-router-dom";

interface myProps {
  errorMSG: string;
}

const ErrorUI: React.FC<myProps> = ({ errorMSG }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 py-8 md:gap-6">
      <p className="text-center text-red-600 dark:text-red-400">{errorMSG}</p>
      <p onClick={() => navigate("/")} className="my-4 cursor-pointer">
        Go back to home page
      </p>
      <div className="flex justify-center w-full">
        <img
          alt="Error"
          src="../../public/6029646.jpg"
          className="w-[90%] sm:w-[40%]"
        />
      </div>
    </div>
  );
};

export default ErrorUI;
