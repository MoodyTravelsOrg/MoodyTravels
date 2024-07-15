import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import defaultProfileImage from "../../assets/default-profile.png";

const UserProfile = ({ userId, setUserImage, setEmail, setUsername }) => {
  const [userData, setUserData] = useState({});
  const [username, setUsernameState] = useState("");
  const [email, setEmailState] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [editField, setEditField] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
          credentials: "include"
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setUsernameState(data.username);
          setEmailState(data.email);
          setProfileImage(data.profileImage);
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (error) {
        setError("An error occurred while fetching user data");
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      if (email) formData.append("email", email);
      if (password) formData.append("password", password);
      if (profileImage && profileImage !== defaultProfileImage) formData.append("profileImage", profileImage);

      const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Profile updated successfully");
        setUsername(data.user.username);
        setUserImage(data.user.profileImage || defaultProfileImage);
        setEditField(null);
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError("An error occurred while updating profile");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
        method: "DELETE",
        credentials: "include"
      });

      if (response.ok) {
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
        localStorage.removeItem("userImage");
        navigate("/");
        window.location.reload();
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError("An error occurred while deleting account");
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <div className="profile-dashboard">
        <div className="profile-field">
          <span>Username: {username}</span>
          <button onClick={() => setEditField("username")}>Edit</button>
        </div>
        <div className="profile-field">
          <span>Email: {email}</span>
          <button onClick={() => setEditField("email")}>Edit</button>
        </div>
        <div className="profile-field">
          <span>Profile Image:</span>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <button onClick={() => setEditField("profileImage")}>Edit</button>
        </div>
        <div className="profile-field">
          <button onClick={() => setEditField("password")}>Change Password</button>
        </div>
        <div className="profile-field">
          <button className="delete-button" onClick={handleDelete}>Delete Account</button>
        </div>
      </div>

      {editField && (
        <form onSubmit={handleUpdate}>
          {editField === "username" && (
            <label>
              New Username:
              <input type="text" value={username} onChange={(e) => setUsernameState(e.target.value)} />
            </label>
          )}
          {editField === "email" && (
            <label>
              New Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          )}
          {editField === "password" && (
            <label>
              New Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          )}
          {editField === "profileImage" && (
            <label>
              New Profile Image:
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
            </label>
          )}
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditField(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;


