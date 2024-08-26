import React, { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Context } from "../../context/Context.jsx";

const Register = () => {
  const { 
    email, setEmail, username, password, error, setUsername, 
    setPassword, confirmPassword, setConfirmPassword, 
    setRecaptchaToken, setProfileImage, fileInput, recaptchaRef, 
    handleRegister, success, closeModal, resetInputs, navigate 
  } = useContext(Context);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <div className="min-h-screen flex items-center justify-center mt-20 px-4">
    <div className="bg-darkGreenForBG shadow-lg rounded-lg overflow-hidden w-auto max-w-4xl flex flex-col md:flex-row">
      <div className="w-full p-8">
        <h2 className="text-2xl font-bold mb-8 text-white text-center md:text-left">Register</h2>
        <form className="space-y-6" onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Profile Image
              </label>
              <input
                type="file"
                className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
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
            {error && (
              <p className="text-red-600 mt-2 text-lg text-center font-semibold bg-yellowishGreenForTextandButtons/85">
                {error}
              </p>
            )}
            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                className="bg-yellowishGreenForTextandButtons text-darkGreenForText py-2 px-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-white"
              >
                Register here
              </button>
              <p className="text-white text-center">
                Already have an account?{" "}
                <span
                  className="text-yellowishGreenForTextandButtons font-semibold cursor-pointer hover:underline underline-offset-8"
                  onClick={() => {
                    resetInputs();
                    navigate("/login");
                  }}
                >
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Modal de éxito */}
      {success.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
          <div className="bg-slate-200/70  p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold text-darkGreenForText mb-4">
              Registration Successful!
            </h3>
            <p className="text-darkGreenForText font-semibold mb-6">
              {success.message} {/* Mostrar mensaje de éxito personalizado */}
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

export default Register;
