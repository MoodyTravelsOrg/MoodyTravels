import React, { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    error,
    resetInputs,
    success,
    closeModal,
    navigate,
  } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-20">
      <div className="bg-darkGreenForBG shadow-lg rounded-lg overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg flex flex-col">
        {/* Sección del formulario */}
        <div className="w-full p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl text-white font-bold mb-6 lg:mb-12 text-center">
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 border-none rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellowishGreenForTextandButtons"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border-none rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellowishGreenForTextandButtons"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-white" />
                ) : (
                  <FaEye className="text-white" />
                )}
              </div>
            </div>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
            <div className="flex flex-col items-center space-y-4 mt-6">
              <button
                type="submit"
                className="w-full bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white"
              >
                Login
              </button>
              <p className="text-white text-center text-sm">
                Don&apos;t have an account?{" "}
                <span
                  className="text-yellowishGreenForTextandButtons font-semibold cursor-pointer hover:underline"
                  onClick={() => {
                    resetInputs();
                    navigate("/Register");
                  }}
                >
                  Register
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de éxito */}
      {success.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
          <div className="bg-slate-200/70 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold text-darkGreenForText mb-4">
              Login Successful!
            </h3>
            <p className="text-darkGreenForText font-semibold mb-6">
              {success.message}
            </p>
            <button
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 rounded-full font-semibold transition-all duration-300 hover:bg-darkGreenForText hover:text-white"
              onClick={closeModal}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;




