// import React, { useContext } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { Context } from "../../context/Context.jsx";

// const Register = () => {
//   const { 
//     email, setEmail, username, password, error, setUsername, 
//     setPassword, confirmPassword, setConfirmPassword, 
//     setRecaptchaToken, setProfileImage, fileInput, recaptchaRef, 
//     handleRegister, navigate, resetInputs } = useContext(Context)

//   const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
//   console.log("ReCAPTCHA Site Key:", siteKey); // Debugging line

//   return (
//     <div className="w-full max-w-5xl mx-auto p-5 bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white">
//       <h2 className="mb-5 text-center text-2xl font-bold">Register</h2>
//       <form onSubmit={handleRegister} className="flex flex-col gap-4">
//         <label className="flex flex-col">
//           <span className="mb-2 font-bold">Email:</span>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//           />
//         </label>
//         <label className="flex flex-col">
//           <span className="mb-2 font-bold">Username:</span>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//           />
//         </label>
//         <label className="flex flex-col">
//           <span className="mb-2 font-bold">Password:</span>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//           />
//         </label>
//         <label className="flex flex-col">
//           <span className="mb-2 font-bold">Confirm Password:</span>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//           />
//         </label>
//         <label className="flex flex-col">
//           <span className="mb-2 font-bold">Profile Image:</span>
//           <input
//             type="file"
//             onChange={(e) => setProfileImage(e.target.files[0])}
//             ref={fileInput}
//             className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
//           />
//         </label>
//         {siteKey && (
//           <div className="flex justify-center w-full">
//             <ReCAPTCHA
//               sitekey={siteKey}
//               onChange={(token) => setRecaptchaToken(token)}
//               ref={recaptchaRef}
//             />
//           </div>
//         )}
//         {error && <p className="text-red-500 mt-2">{error}</p>}

//         <button type="submit" className="mt-5 p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300">Register</button>
//       </form>
//       <button type="submit" onClick={() => {
//         resetInputs()
//         navigate("/login")}}
//         className="mt-5 p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300 w-full"
//       >
//         Already have an account? Login here
//       </button>

//     </div>
//   );
// }

// export default Register;

// ! I changed some things in order to achieve a totally new styling (and effect):

import React, { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Context } from "../../context/Context.jsx";
import { FaUserAstronaut, FaUser, FaLock } from "react-icons/fa";
import { GiDialPadlock } from "react-icons/gi";

const Register = () => {
  const { 
    email, setEmail, username, password, error, setUsername, 
    setPassword, confirmPassword, setConfirmPassword, 
    setRecaptchaToken, setProfileImage, fileInput, recaptchaRef, 
    handleRegister, navigate, resetInputs } = useContext(Context);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-green-800/60 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-full md:w-1/2 p-8 order-1">
          <h2 className="text-2xl font-bold mb-8 text-white">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700">
                <FaUserAstronaut className="inline-block mr-2" />
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                <FaUser className="inline-block mr-2" />
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
                <FaLock className="inline-block mr-2" />
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">
                <GiDialPadlock className="inline-block mr-2" />
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={(e) => setProfileImage(e.target.files[0])}
                ref={fileInput}
              />
            </div>
            {siteKey && (
              <div className="flex justify-center w-full mb-4">
                <ReCAPTCHA
                  sitekey={siteKey}
                  onChange={(token) => setRecaptchaToken(token)}
                  ref={recaptchaRef}
                />
              </div>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button type="submit" className="w-full bg-yellowishGreen text-white py-2 rounded mt-4">Register here</button>
          </form>
          {/* <div className="mt-8 text-center">
            <p className="text-gray-700">
              Already have an account?
              <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => {
                  resetInputs();
                  navigate("/login");
                }}
              >
                Sign in
              </span>
            </p>
          </div> */}
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center order-2 bg-transparent/10">
          <div className="text-center mb-4">
            <p className="text-yellowishGreen mb-5">Already have an account?</p>
            <span
              className="text-white cursor-pointer"
              onClick={() => {
                resetInputs();
                navigate("/login");
              }}
            >
              Sign in
            </span>
          </div>
          <img
            src="/images/inca-mayan-design-sculpted-stones.png"
            alt="Sign Up"
            className="w-64 mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;