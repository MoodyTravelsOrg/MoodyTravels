import React, { useContext, useState } from "react";
import "./UserProfile.css";
import { Context } from "../../context/Context";
import { FaUserEdit, FaKey, FaSave, FaTimes } from 'react-icons/fa';

const UserProfile = () => {
  const {
    navigate, username, password, error, setUsername, setPassword,
    setProfileImage, fileInput, loggedInUserData, handleUpdate,
    handleDelete, editField, setEditField
  } = useContext(Context);

  const handleSave = (event) => {
    event.preventDefault();
    handleUpdate(event); // event is passed to handleUpdate to prevent default form submission
    setEditField(null);
  };

  const handleCancel = () => {
    setEditField(null);
  };

  const renderEditField = (field) => {
    switch (field) {
      case "profileImage":
        return (
          <div className="edit-form">
            <label>
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} ref={fileInput} />
            </label>
            <div className="edit-icons">
              <FaSave className="save-icon" onClick={handleSave} />
              <FaTimes className="cancel-icon" onClick={handleCancel} />
            </div>
          </div>
        );
      case "username":
        return (
          <div className="edit-form">
            <label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <div className="edit-icons">
              <FaSave className="save-icon" onClick={handleSave} />
              <FaTimes className="cancel-icon" onClick={handleCancel} />
            </div>
          </div>
        );
      case "password":
        return (
          <div className="edit-form">
            <label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div className="edit-icons">
              <FaSave className="save-icon" onClick={handleSave} />
              <FaTimes className="cancel-icon" onClick={handleCancel} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-dashboard">
        <div className="profile-field">
          <span>Profile Image:</span>
          <img src={loggedInUserData.profileImage} alt="Profile" className="profile-image" onClick={() => setEditField("profileImage")} />
          {editField === "profileImage" && renderEditField("profileImage")}
        </div>
        <div className="profile-field">
          <span>Username: {loggedInUserData.username}</span>
          {editField !== "username" && <FaUserEdit className="edit-icon" onClick={() => setEditField("username")} />}
          {editField === "username" && renderEditField("username")}
        </div>
        <div className="profile-field">
          <span>Password: *****</span>
          {editField !== "password" && <FaKey className="edit-icon" onClick={() => setEditField("password")} />}
          {editField === "password" && renderEditField("password")}
        </div>
        {error && <p className="error">{error}</p>}
        <button className="delete-button" onClick={handleDelete}>Delete Account</button>
        <button onClick={() => navigate("/")}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default UserProfile;





