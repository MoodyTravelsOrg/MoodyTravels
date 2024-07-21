// import React, { useContext, useState } from "react";
// import "./UserProfile.css";
// import { Context } from "../../context/Context";
// import { FaUserEdit, FaKey, FaSave, FaTimes } from 'react-icons/fa';

// const UserProfile = () => {
//   const {
//     navigate, username, password, error, setUsername, setPassword,
//     setProfileImage, fileInput, loggedInUserData, handleUpdate,
//     handleDelete, editField, setEditField, resetInputs
//   } = useContext(Context);

//   const handleSave = (event) => {
//     event.preventDefault();
//     handleUpdate(event); // event is passed to handleUpdate to prevent default form submission
//     setEditField(null);
//   };

//   const handleCancel = () => {
//     resetInputs();  // Reset inputs when cancel is clicked
//     setEditField(null);
//   };

//   const handleEditFieldChange = (field) => {
//     resetInputs();  // Reset inputs when a new field is selected for editing
//     setEditField(field);
//   };

//   const renderEditField = (field) => {
//     switch (field) {
//       case "profileImage":
//         return (
//           <div className="edit-form">
//             <label>
//               <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} ref={fileInput} />
//             </label>
//             <div className="edit-icons">
//               <FaSave className="save-icon" onClick={handleSave} />
//               <FaTimes className="cancel-icon" onClick={handleCancel} />
//             </div>
//           </div>
//         );
//       case "username":
//         return (
//           <div className="edit-form">
//             <label>
//               <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </label>
//             <div className="edit-icons">
//               <FaSave className="save-icon" onClick={handleSave} />
//               <FaTimes className="cancel-icon" onClick={handleCancel} />
//             </div>
//           </div>
//         );
//       case "password":
//         return (
//           <div className="edit-form">
//             <label>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <div className="edit-icons">
//               <FaSave className="save-icon" onClick={handleSave} />
//               <FaTimes className="cancel-icon" onClick={handleCancel} />
//             </div>
//           </div>
//         );
//       /* default:
//         return null; */
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       <div className="profile-dashboard">
//         <div className="profile-field">
//           <span>Profile Image:</span>
//           <img src={loggedInUserData.profileImage} alt="Profile" className="profile-image" onClick={() => handleEditFieldChange("profileImage")} />
//           {editField === "profileImage" && renderEditField("profileImage")}
//         </div>
//         <div className="profile-field">
//           <span>Username: {loggedInUserData.username}</span>
//           {editField !== "username" && <FaUserEdit className="edit-icon" onClick={() => handleEditFieldChange("username")} />}
//           {editField === "username" && renderEditField("username")}
//         </div>
//         <div className="profile-field">
//           <span>Password: *****</span>
//           {editField !== "password" && <FaKey className="edit-icon" onClick={() => handleEditFieldChange("password")} />}
//           {editField === "password" && renderEditField("password")}
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button className="delete-button" onClick={handleDelete}>Delete Account</button>
//         <button onClick={() => navigate("/")}>Back to Homepage</button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

// ! Tailwind:

import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { FaUserEdit, FaKey, FaSave, FaTimes } from 'react-icons/fa';

const UserProfile = () => {
  const {
    navigate, username, password, error, setUsername, setPassword,
    setProfileImage, fileInput, loggedInUserData, handleUpdate,
    handleDelete, editField, setEditField, resetInputs
  } = useContext(Context);

  const handleSave = (event) => {
    event.preventDefault();
    handleUpdate(event); // event is passed to handleUpdate to prevent default form submission
    setEditField(null);
  };

  const handleCancel = () => {
    resetInputs();  // Reset inputs when cancel is clicked
    setEditField(null);
  };

  const handleEditFieldChange = (field) => {
    resetInputs();  // Reset inputs when a new field is selected for editing
    setEditField(field);
  };

  const renderEditField = (field) => {
    switch (field) {
      case "profileImage":
        return (
          <div className="flex flex-col items-center p-5 rounded-lg mt-2.5">
            <label className="block mb-2 text-white">
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} ref={fileInput} className="w-full p-2 mb-5 border-none rounded-lg backdrop-blur-md bg-white/30 text-black" />
            </label>
            <div className="flex gap-2.5">
              <FaSave className="text-green-500 text-lg cursor-pointer" onClick={handleSave} />
              <FaTimes className="text-red-500 text-lg cursor-pointer" onClick={handleCancel} />
            </div>
          </div>
        );
      case "username":
        return (
          <div className="flex flex-col items-center p-5 rounded-lg mt-2.5">
            <label className="block mb-2 text-white">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-5 border-none rounded-lg backdrop-blur-md bg-white/30 text-black" />
            </label>
            <div className="flex gap-2.5">
              <FaSave className="text-green-500 text-lg cursor-pointer" onClick={handleSave} />
              <FaTimes className="text-red-500 text-lg cursor-pointer" onClick={handleCancel} />
            </div>
          </div>
        );
      case "password":
        return (
          <div className="flex flex-col items-center p-5 rounded-lg mt-2.5">
            <label className="block mb-2 text-white">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-5 border-none rounded-lg backdrop-blur-md bg-white/30 text-black" />
            </label>
            <div className="flex gap-2.5">
              <FaSave className="text-green-500 text-lg cursor-pointer" onClick={handleSave} />
              <FaTimes className="text-red-500 text-lg cursor-pointer" onClick={handleCancel} />
            </div>
          </div>
        );
      /* default:
        return null; */
    }
  };

  return (
    <div className="max-w-5xl p-5 w-full my-24 mx-auto bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white transition-all duration-300 ease-in-out">
      <h2 className="mb-5 text-2xl text-center">User Profile</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full p-2.5 border-b border-white/20">
          <span className="text-lg">Profile Image:</span>
          <img src={loggedInUserData.profileImage} alt="Profile" className="w-24 h-24 rounded-full border-2 border-white/70 cursor-pointer mb-5" onClick={() => handleEditFieldChange("profileImage")} />
          {editField === "profileImage" && renderEditField("profileImage")}
        </div>
        <div className="flex items-center justify-between w-full p-2.5 border-b border-white/20">
          <span className="text-lg">Username: {loggedInUserData.username}</span>
          {editField !== "username" && <FaUserEdit className="text-lg cursor-pointer ml-2.5 text-white" onClick={() => handleEditFieldChange("username")} />}
          {editField === "username" && renderEditField("username")}
        </div>
        <div className="flex items-center justify-between w-full p-2.5 border-b border-white/20">
          <span className="text-lg">Password: *****</span>
          {editField !== "password" && <FaKey className="text-lg cursor-pointer ml-2.5 text-white" onClick={() => handleEditFieldChange("password")} />}
          {editField === "password" && renderEditField("password")}
        </div>
        {error && <p className="text-red-500 text-center mb-2.5">{error}</p>}
        <button className="p-2.5 mb-2.5 border-none rounded-full bg-red-500/20 text-black cursor-pointer transition-colors duration-300 hover:bg-red-500/40 hover:text-white" onClick={handleDelete}>Delete Account</button>
        <button className="p-2.5 mb-2.5 border-none rounded-full bg-white/30 text-black cursor-pointer transition-colors duration-300 hover:bg-white/50 hover:text-black" onClick={() => navigate("/")}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default UserProfile;