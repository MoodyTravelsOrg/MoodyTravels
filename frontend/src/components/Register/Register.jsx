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
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div className="bg-darkGreenForBG shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex ">
        <div className="w-full md:w-1/2 p-8 order-1">
          <h2 className="text-2xl font-bold mb-14 text-white">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-white">
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
              <label className="block text-white">
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
              <label className="block text-white">
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
              <label className="block text-white">
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
              <label className="block text-white">
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
            <div className="flex justify-center">
              <button type="submit" className="bg-yellowishGreenForTextandButtons text-darkGreenForText px-8 py-3 rounded-full mt-4 font-semibold">Register here</button>
            </div>
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
            <p className="text-white mb-52 text-2xl font-bold">Already have an account?</p>
            <span
              className="w-full bg-yellowishGreenForTextandButtons text-darkGreenForText px-8 py-3 rounded-full cursor-pointer font-semibold"
              onClick={() => {
                resetInputs();
                navigate("/login");
              }}
            >
              Sign in
            </span>
          </div>
          <img
            src="/images/Ancient-gate-CLOSED.png"
            alt="Sign Up"
            className="w-80 mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;