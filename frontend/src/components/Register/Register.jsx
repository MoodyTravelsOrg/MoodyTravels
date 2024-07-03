import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import defaultProfileImage from '../../assets/default-profile.png';

const Register = ({ setUserId, setIsAuthenticated, setUsername }) => {
  const [email, setEmail] = useState("");
  const [username, setUsernameState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const fileInput = useRef(null); 
  const recaptchaRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('confirmPassword', confirmPassword);
      formData.append('profileImage', profileImage);
      formData.append('recaptchaToken', recaptchaToken);

      const response = await fetch( `${import.meta.env.VITE_API}/register`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const { user } = data;
        localStorage.setItem('username', user.username);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userImage', user.profileImage || defaultProfileImage);
        setUserId(user.id);
        setUsername(user.username);
        setIsAuthenticated(true);
        fileInput.current.value = ""; 
        recaptchaRef.current.reset();
        setSuccess("Registration successful");
        setRecaptchaToken("");
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('An error occurred');
    }
  }

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
            onChange={(e) => setUsernameState(e.target.value)}
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
        <ReCAPTCHA
          sitekey="6Le33_YpAAAAAJfZFlSijhsa70YWxT2beWXENQq8"
          onChange={(token) => setRecaptchaToken(token)}
          ref={recaptchaRef}
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;


