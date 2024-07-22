// import React, { useContext } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import "./Register.css";
// import { Context } from "../../context/Context.jsx";

// const Register = () => {

//   const { email, setEmail, username, password, error, setUsername, 
//     setPassword, confirmPassword, setConfirmPassword, 
//     setRecaptchaToken, setProfileImage, fileInput, recaptchaRef, 
//     handleRegister, navigate } = useContext(Context)


//   const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
//   console.log("ReCAPTCHA Site Key:", siteKey); // Debugging line

//   return (
//     <div className="container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Confirm Password:
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Profile Image:
//           <input
//             type="file"
//             onChange={(e) => setProfileImage(e.target.files[0])}
//             ref={fileInput}
//           />
//         </label>
//         {siteKey && (
//           <ReCAPTCHA
//             sitekey={siteKey}
//             onChange={(token) => setRecaptchaToken(token)}
//             ref={recaptchaRef}
//           />
//         )}
//         {error && <p className="error">{error}</p>}

//         <button type="submit">Register</button>
//       </form>
//       <button type="submit" onClick={() => navigate("/login")}>Have already an account login here</button>

//     </div>
//   );
// }

// export default Register;

// ! Tailwind CSS:

import React, { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Context } from "../../context/Context.jsx";

const Register = () => {
  const { 
    email, setEmail, username, password, error, setUsername, 
    setPassword, confirmPassword, setConfirmPassword, 
    setRecaptchaToken, setProfileImage, fileInput, recaptchaRef, 
    handleRegister, navigate, resetInputs } = useContext(Context)

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  console.log("ReCAPTCHA Site Key:", siteKey); // Debugging line

  return (
    <div className="w-full max-w-5xl mx-auto p-5 bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white">
      <h2 className="mb-5 text-center text-2xl font-bold">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Username:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Confirm Password:</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-2 font-bold">Profile Image:</span>
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
            ref={fileInput}
            className="p-2 border border-gray-300 rounded w-full bg-white/50 text-black"
          />
        </label>
        {siteKey && (
          <div className="flex justify-center w-full">
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={(token) => setRecaptchaToken(token)}
              ref={recaptchaRef}
            />
          </div>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button type="submit" className="mt-5 p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300">Register</button>
      </form>
      <button type="submit" onClick={() => {
        resetInputs()
        navigate("/login")}}
        className="mt-5 p-2 rounded-full bg-white text-black font-bold cursor-pointer hover:bg-green-600 transition-colors duration-300 w-full"
      >
        Already have an account? Login here
      </button>

    </div>
  );
}

export default Register;