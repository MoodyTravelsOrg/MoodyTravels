import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { FaTrash, FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsFillCloudCheckFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";

const UserProfile = () => {
  const {
    navigate, username, password, error, setUsername, setPassword,
    setProfileImage, fileInput, loggedInUserData, handleUpdate,
    handleDelete, editField, setEditField, resetInputs
  } = useContext(Context);

  const [showPassword, setShowPassword] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    handleUpdate(event);
    setEditField(null);
  };

  const handleCancel = () => {
    resetInputs();
    setEditField(null);
  };

  const handleEditFieldChange = (field) => {
    resetInputs();
    setEditField(field);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderEditField = (field) => {
    switch (field) {
      case "profileImage":
        return (
          <div className="relative flex items-center space-x-2 w-full">
            <input
              type="file"
              onChange={(e) => setProfileImage(e.target.files[0])}
              ref={fileInput}
              className="w-96 p-2 border-none rounded-lg bg-white text-black"
            />
            <BsFillCloudCheckFill className="text-yellowishGreenForTextandButtons text-lg cursor-pointer absolute right-10" onClick={handleSave} />
            <AiOutlineStop className="text-red-500 text-lg cursor-pointer absolute right-2" onClick={handleCancel} />
          </div>
        );
      case "username":
        return (
          <div className="relative mt-16 flex items-center space-x-2 w-full">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-80 p-2 pr-10 border-none rounded-lg bg-white text-black"
            />
            <BsFillCloudCheckFill className="text-yellowishGreenForTextandButtons text-lg cursor-pointer absolute right-10" onClick={handleSave} />
            <AiOutlineStop className="text-red-500 text-lg cursor-pointer absolute right-2" onClick={handleCancel} />
          </div>
        );
      case "password":
        return (
          <div className="relative flex items-center space-x-2 w-full">
            <div className="relative w-80">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 pr-10 border-none rounded-lg bg-white text-black"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center"
              >
                {showPassword ? <FaEyeSlash className="text-gray-700" /> : <FaEye className="text-gray-700" />}
              </button>
            </div>
            <BsFillCloudCheckFill className="text-yellowishGreenForTextandButtons text-lg cursor-pointer absolute right-10" onClick={handleSave} />
            <AiOutlineStop className="text-red-500 text-lg cursor-pointer absolute right-2" onClick={handleCancel} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-16 px-4">
      <div className="relative w-full max-w-3xl rounded-lg shadow-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellowishGreenForBG via-darkGreenForText to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-transparent rounded-lg z-20 pointer-events-none transition-all duration-300 group-hover:bg-opacity-70"></div>
        <div className="relative bg-darkGreenForBG rounded-lg z-10 transition-all duration-300 group-hover:bg-opacity-30 p-10">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">User Profile</h2>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium text-white">Profile Image:</span>
              <img src={loggedInUserData.profileImage} alt="Profile" className="mr-10 w-32 h-32 rounded-full border-4 border-yellowishGreenForTextandButtons cursor-pointer hover:border-red-600 transition-all duration-300" onClick={() => handleEditFieldChange("profileImage")} />
            </div>
            {editField === "profileImage" && renderEditField("profileImage")}
            
            <div className="flex items-center justify-between">
              <span className="mt-16 mr-6 text-xl font-medium text-white">Username:</span>
              {editField === "username" ? (
                renderEditField("username")
              ) : (
                <div className="flex items-center">
                  <span className="mt-16 text-white mr-56 text-xl">{loggedInUserData.username}</span>
                  <MdEdit className="mt-16 ml-28 text-2xl cursor-pointer text-yellowishGreenForTextandButtons hover:text-red-600" onClick={() => handleEditFieldChange("username")} />
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="mr-6 text-xl font-medium text-white">Password:</span>
              {editField === "password" ? (
                renderEditField("password")
              ) : (
                <div className="flex items-center">
                  <span className="text-white mr-56 text-xl">*****</span>
                  <MdEdit className="ml-28 text-2xl cursor-pointer text-yellowishGreenForTextandButtons hover:text-red-600" onClick={() => handleEditFieldChange("password")} />
                </div>
              )}
            </div>
            
            {error && <p className="text-red-500 text-center text-lg">{error}</p>}
            
            <div className="flex justify-center space-x-6 mt-10">
              <button
                className="mt-10 px-8 py-3 bg-red-500/50 text-white rounded-full hover:bg-red-600 transition duration-300 flex items-center text-lg"
                onClick={handleDelete}
              >
                <FaTrash className="mr-2" />
                Delete Account
              </button>
              <button
                className="mt-10 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-darkGreenForBG transition duration-300 flex items-center text-lg"
                onClick={() => navigate("/")}
              >
                <FaHome className="mr-2" />
                Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;