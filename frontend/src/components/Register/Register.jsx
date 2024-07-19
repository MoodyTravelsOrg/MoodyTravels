import React, { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Register.css";
import { Context } from "../../context/Context.jsx";

const Register = () => {

  const { email, setEmail, username, password, error, setUsername, 
    setPassword, confirmPassword, setConfirmPassword, 
    setRecaptchaToken, setProfileImage, fileInput, recaptchaRef, 
    handleRegister, navigate } = useContext(Context)


  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  console.log("ReCAPTCHA Site Key:", siteKey); // Debugging line

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Profile Image:
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
            ref={fileInput}
          />
        </label>
        {siteKey && (
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={(token) => setRecaptchaToken(token)}
            ref={recaptchaRef}
          />
        )}
        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>
      <button type="submit" onClick={() => navigate("/login")}>Have already an account login here</button>

    </div>
  );
}

export default Register;





