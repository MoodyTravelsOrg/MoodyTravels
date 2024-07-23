import React from "react";
import { useNavigate } from "react-router-dom";

const LoginViaTemple = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="mt-16 cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ml-96 mr-96 p-20 h-320"
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/Enter_the_sanctuary.jpg')" }}
      />
      <div className="cursor-pointer relative z-10 bg-black bg-opacity-50 p-8">
        <p className="text-white text-2xl font-bold text-center">
          Ready? Then enter the sanctuary and get started...
        </p>
      </div>
      <div className="cursor-pointer relative z-10 bg-black bg-opacity-50 p-8">
        <p className="text-white text-2xl font-bold text-center">
          CLICK THE ENTRANCE!
        </p>
      </div>
    </div>
  );
};

export default LoginViaTemple;
