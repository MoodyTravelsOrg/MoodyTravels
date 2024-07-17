import React, { useContext } from "react";
import "./UserProfile.css";
import { Context } from "../../context/Context";

const UserProfile = () => {
  const {
    navigate, username, password, error, setUsername, setPassword,
    setProfileImage, fileInput, loggedInUserData, editField,
    setEditField, handleUpdate, handleDelete, success
  } = useContext(Context);

  const renderEditField = () => {
    switch (editField) {
      case "profileImage":
        return (
          <form onSubmit={handleUpdate}>
            <label>
              New Profile Image:
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} ref={fileInput} />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditField(null)}>Cancel</button>
          </form>
        );
      case "username":
        return (
          <form onSubmit={handleUpdate}>
            <label>
              New Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditField(null)}>Cancel</button>
          </form>
        );
      case "password":
        return (
          <form onSubmit={handleUpdate}>
            <label>
              New Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditField(null)}>Cancel</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {editField ? (
        <div className="edit-field">
          {renderEditField()}
        </div>
      ) : (
        <div className="profile-dashboard">
          <div className="profile-field">
            <span>Profile Image:</span>
            <img src={loggedInUserData.profileImage} alt="Profile" className="profile-image" />
            <button onClick={() => setEditField("profileImage")}>Edit</button>
          </div>
          <div className="profile-field">
            <span>Username: {loggedInUserData.username}</span>
            <button onClick={() => setEditField("username")}>Edit</button>
          </div>
          <div className="profile-field">
            <span>Password: ******** </span>
            <button onClick={() => setEditField("password")}>Change Password</button>
          </div>
          <div className="profile-field">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <button className="delete-button" onClick={handleDelete}>Delete Account</button>
            <button onClick={() => navigate("/")}>Back to Homepage</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;






