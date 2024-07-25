import React from "react";
import { useNavigate } from "react-router-dom";

const LoginViaTemple = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="mt-1 cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto w-full max-w-2xl h-188"
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        // style={{ backgroundImage: "url('/images/Enter_the_sanctuary.jpg')" }} // * This is the previous image
        style={{ backgroundImage: "url('/images/Best_Temple_4K.jpeg')" }} // * This one might fit better? (Since it is realisitc...)
      />
      <div className="absolute inset-0 flex flex-col justify-between z-10 p-8">
        <p className="text-white text-2xl font-bold text-center bg-black bg-opacity-60 p-4">
          Ready? Then enter the sanctuary and get started...
        </p>
        <p className="text-white text-2xl font-bold text-center mb-4 bg-black bg-opacity-60 p-4">
          CLICK THE ENTRANCE!
        </p>
      </div>
    </div>
  );
};

export default LoginViaTemple;
