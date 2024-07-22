// import React, { useContext } from "react";
// import "./Login.css";
// import { Context } from "../../context/Context.jsx";
// import { FaUserAstronaut } from "react-icons/fa";
// // Imported this from react-icons/fa. (This is a free icon pack that includes a lot of icons. You can find it here: https://react-icons.github.io/react-icons/ )
// import { GiDialPadlock } from "react-icons/gi";
// // Just FYI: Can't add the additonal import as an enumeration within the first import statement since it's a separate section (gi instead of fa)

// // adding the setUserId function to the Login component
// const Login = () => {

//   const { navigate, username, setUsername, password, setPassword, handleLogin, error, setError} = useContext(Context)

//   return (
//     <div className="container">
//       <form onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <div className="input-wrapper">
//           <label htmlFor="username">Username</label>
//           <div className="input-box">
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <FaUserAstronaut className="icon" />
//             {/* I picked the Austronaut as a symbol for travelling... Maybe we can find something more fitting but I like it so far... */}
//           </div>
//         </div>
//         <div className="input-wrapper">
//           <label htmlFor="password">Password</label>
//           <div className="input-box">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <GiDialPadlock className="icon" />
//             {/* I picked the Padlock as a symbol for security... Maybe we can find something more fitting but I like it so far... */}
//           </div>
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Log In</button>
//       </form>
//       <div className="registered-link">
//         <button onClick={() => {
//           setUsername("")
//           setPassword("")
//           setError("")
//           navigate("/register")
//         }
//         }>
//           Not yet registered? Register here!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// ! Tailwind CSS:

import React, { useContext } from "react";
import { Context } from "../../context/Context.jsx";
import { FaUserAstronaut } from "react-icons/fa";
import { GiDialPadlock } from "react-icons/gi";

const Login = () => {
  const { navigate, username, setUsername, password, setPassword, handleLogin, error, setError } = useContext(Context);

  return (
    <div className="w-full max-w-5xl mx-auto p-5 bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <h2 className="mb-5 text-center text-2xl font-bold">Login</h2>
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-2 font-bold">Username</label>
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
            />
            <FaUserAstronaut className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-bold">Password</label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
            />
            <GiDialPadlock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
          </div>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button type="submit" className="mt-5 p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300">Log In</button>
      </form>
      <div className="mt-5 text-center">
        <button
          onClick={() => {
            setUsername("");
            setPassword("");
            setError("");
            navigate("/register");
          }}
          className="p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300"
        >
          Not yet registered? Register here!
        </button>
      </div>
    </div>
  );
};

export default Login;