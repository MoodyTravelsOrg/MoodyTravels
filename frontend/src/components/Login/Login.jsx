import React, { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { FaUserAstronaut, FaEye, FaEyeSlash } from "react-icons/fa";
import { GiDialPadlock } from "react-icons/gi";

const Login = () => {
  const { navigate, username, setUsername, password, setPassword, handleLogin, error, resetInputs } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-darkGreenForBG shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-full md:w-1/2 p-8 order-2">
          <h2 className="text-2xl text-white font-bold mb-12">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-white">
                <FaUserAstronaut className="inline-block mr-2" />
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white">
                <GiDialPadlock className="inline-block mr-2" />
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="mt-6" /> : <FaEye className="mt-6" />}
              </div>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex justify-center">
              <button type="submit" className="bg-yellowishGreenForTextandButtons text-darkGreenForText px-8 py-3 rounded-full mt-4 font-semibold">Login</button  > 
            </div>
          </form>
          {/* <div className="mt-8 text-center">
            <p className="text-gray-700">
              Don't have an account?
              <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => {
                  resetInputs();
                  navigate("/register");
                }}
              >
                Sign up
              </span>
            </p>
          </div> */}
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center order-1 bg-transparent/10">
          <div className="text-center mb-4">
            <p className="text-2xl text-white font-bold mb-12">Don't have an account?</p>
            <span
              className="w-full bg-yellowishGreenForTextandButtons text-darkGreenForText px-8 py-3 rounded-full mt-4 cursor-pointer font-semibold"
              onClick={() => {
                resetInputs();
                navigate("/register");
              }}
            >
              Register
            </span>
          </div>
          <img
            src="/images/Maya_Totem.png"
            alt="Sign In"
            className="w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;