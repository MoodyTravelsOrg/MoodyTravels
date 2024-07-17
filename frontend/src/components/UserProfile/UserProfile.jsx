import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import defaultProfileImage from "../../assets/default-profile.png";
import { Context } from "../../context/Context";
const UserProfile = () => {

  const { navigate, email, setEmail, username, password, error, setUsername, 
    setPassword, setProfileImage, fileInput, loggedInUserData, editField, 
    setEditField, handleUpdate, handleDelete
  } = useContext(Context)

  
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p className="error">{error}</p>}

      <div className="profile-dashboard">
        <div className="profile-field">
          <span>Username: {loggedInUserData.username}</span>
          <button onClick={() => setEditField("username")}>Edit</button>
        </div>
        <div className="profile-field">
          <span>Email: {loggedInUserData.email}</span>
          <button onClick={() => setEditField("email")}>Edit</button>
        </div>
        <div className="profile-field">
          <span>Profile Image:</span>
          <img src={loggedInUserData.profileImage} alt="Profile" className="profile-image" />
          <button onClick={() => setEditField("profileImage")}>Edit</button>
        </div>
        {/* <div className="profile-field">
          <span>Last Login: {{lastLogin}}</span>
        </div> */}
        <div className="profile-field">
          <button onClick={() => setEditField("password")}>Change Password</button>
        </div>
        <div className="profile-field">
          <button className="delete-button" onClick={handleDelete}>Delete Account</button>
          <button onClick={()=>navigate("/")}>Back to Homepage</button>
        </div>
      </div>

      {editField && (
        <form onSubmit={handleUpdate}>
          {editField === "username" && (
            <label>
              New Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} ref={fileInput} />
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





