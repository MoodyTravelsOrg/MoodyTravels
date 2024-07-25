// import React, { useContext } from "react";
// import { Context } from "../../context/Context.jsx";
// import { FaUserAstronaut } from "react-icons/fa";
// import { GiDialPadlock } from "react-icons/gi";

// const Login = () => {
//   const { navigate, username, setUsername, password, setPassword, handleLogin, error, resetInputs} = useContext(Context)

//   return (
//     <div className="w-full max-w-5xl mx-auto p-5 bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white">
//       <form onSubmit={handleLogin} className="flex flex-col gap-4">
//         <h2 className="mb-5 text-center text-2xl font-bold">Login</h2>
//         <div className="flex flex-col">
//           <label htmlFor="username" className="mb-2 font-bold">Username</label>
//           <div className="relative">
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//             />
//             <FaUserAstronaut className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="password" className="mb-2 font-bold">Password</label>
//           <div className="relative">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//             />
//             <GiDialPadlock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
//           </div>
//         </div>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//         <button type="submit" className="mt-5 p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300">Log In</button>
//       </form>
//       <div className="mt-5 text-center">
//         <button
//           onClick={() => {
//             resetInputs()
//             navigate("/register");
//           }}
//           className="p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300"
//         >
//           Not yet registered? Register here!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// ! I changed some things in order to achieve a totally new styling (and effect):

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
      <div className="bg-yellowishGreen/60 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-full md:w-1/2 p-8 order-2">
          <h2 className="text-2xl font-bold mb-8">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">
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
              <label className="block text-gray-700">
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
            <button type="submit" className="w-full bg-green-800 text-white py-2 rounded mt-4">Log In</button>
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
            <p className="text-green-800">Don't have an account?</p>
            <span
              className="text-white cursor-pointer"
              onClick={() => {
                resetInputs();
                navigate("/register");
              }}
            >
              Sign up
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