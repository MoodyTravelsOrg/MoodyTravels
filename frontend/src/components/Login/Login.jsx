import React, { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { navigate, username, setUsername, password, setPassword, handleLogin, error, resetInputs } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-darkGreenForBG shadow-lg rounded-lg overflow-hidden w-full max-w-md md:max-w-4xl flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl text-white font-bold mb-6 md:mb-12 text-center md:text-left">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">Username</label>
              <input
                type="text"
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className="text-white" /> : <FaEye className="text-white" />}
              </div>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex justify-center">
              <button type="submit" className="bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white">Login</button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center justify-center bg-transparent/10">
          <div className="text-center mb-6 md:mb-12">
            <p className="text-xl md:text-2xl text-white font-bold mb-4 md:mb-6">Don't have an account?</p>
            <span
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white"
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
            className="w-40 md:w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

