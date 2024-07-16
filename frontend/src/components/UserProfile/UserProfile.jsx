// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./UserProfile.css";
// import defaultProfileImage from "../../assets/default-profile.png";

// const UserProfile = ({ userId, setUserImage, setUsername }) => {
//   const [userData, setUserData] = useState({});
//   const [username, setUsernameState] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [profileImage, setProfileImage] = useState(null);
//   const [lastLogin, setLastLogin] = useState("");
//   const [editField, setEditField] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
//           credentials: "include"
//         });

//         if (response.ok) {
//           const userData = await response.json();

//           setUserData(userData);
//           setUsernameState(userData.username);
//           setEmail(userData.email);
//           setProfileImage(userData.profileImage || defaultProfileImage);
//           setLastLogin(userData.lastLogin);
//         } else {
//           const errorData = await response.json();
//           throw new Error(errorData.message);
//         }
//       } catch (error) {
//         setError("An error occurred while fetching user data");
//       }
//     };

//     fetchUserData();
//   }, [userId]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const formData = new FormData();
//       if (email) formData.append("email", email);
//       if (password) formData.append("password", password);
//       if (profileImage && profileImage !== defaultProfileImage) formData.append("profileImage", profileImage);

//       const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
//         method: "PATCH",
//         credentials: "include",
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSuccess("Profile updated successfully");
//         setUsername(data.user.username);
//         setUserImage(data.user.profileImage || defaultProfileImage);
//         setEditField(null);
//         navigate("/");
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }
//     } catch (error) {
//       setError("An error occurred while updating profile");
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
//       return;
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
//         method: "DELETE",
//         credentials: "include"
//       });

//       if (response.ok) {
//         localStorage.removeItem("username");
//         localStorage.removeItem("userId");
//         localStorage.removeItem("userImage");
//         navigate("/");
//         window.location.reload();
//       } else {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }
//     } catch (error) {
//       setError("An error occurred while deleting account");
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h2>User Profile</h2>
//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}

//       <div className="profile-dashboard">
//         <div className="profile-field">
//           <span>Username: {username}</span>
//           <button onClick={() => setEditField("username")}>Edit</button>
//         </div>
//         <div className="profile-field">
//           <span>Email: {email}</span>
//           <button onClick={() => setEditField("email")}>Edit</button>
//         </div>
//         <div className="profile-field">
//           <span>Profile Image:</span>
//           <img src={profileImage} alt="Profile" className="profile-image" />
//           <button onClick={() => setEditField("profileImage")}>Edit</button>
//         </div>
//         <div className="profile-field">
//           <span>Last Login: {lastLogin}</span>
//         </div>
//         <div className="profile-field">
//           <button onClick={() => setEditField("password")}>Change Password</button>
//         </div>
//         <div className="profile-field">
//           <button className="delete-button" onClick={handleDelete}>Delete Account</button>
//         </div>
//       </div>

//       {editField && (
//         <form onSubmit={handleUpdate}>
//           {editField === "username" && (
//             <label>
//               New Username:
//               <input type="text" value={username} onChange={(e) => setUsernameState(e.target.value)} />
//             </label>
//           )}
//           {editField === "email" && (
//             <label>
//               New Email:
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//           )}
//           {editField === "password" && (
//             <label>
//               New Password:
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//           )}
//           {editField === "profileImage" && (
//             <label>
//               New Profile Image:
//               <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
//             </label>
//           )}
//           <button type="submit">Update</button>
//           <button type="button" onClick={() => setEditField(null)}>Cancel</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

// ! I decided to comment out the entire previous code all at once instead of commenting out line by line and leaving hints here and there. This was too chaotic to look at. */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfileImage from "../../assets/default-profile.png";

const UserProfile = ({ userId, setUserImage, setUsername }) => {
  const [userData, setUserData] = useState({});
  const [username, setUsernameState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [lastLogin, setLastLogin] = useState("");
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
          const userData = await response.json();

          setUserData(userData);
          setUsernameState(userData.username);
          setEmail(userData.email);
          setProfileImage(userData.profileImage || defaultProfileImage);
          setLastLogin(userData.lastLogin);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message);
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
        throw new Error(errorData.message);
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
        throw new Error(errorData.message);
      }
    } catch (error) {
      setError("An error occurred while deleting account");
    }
  };

  return (
    <div className="mx-auto my-24 p-10 bg-white/10 shadow-lg backdrop-blur-lg border border-white/30 text-white">

      <h2 className="mb-6 text-3xl">User Profile</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="no-underline hover:underline">Username: {username}</span>
          <button onClick={() => setEditField("username")} className="px-4 py-2 ml-6 rounded-full bg-white/30 hover:bg-white/50 transition cursor-pointer focus:outline-none focus:ring focus:ring-green-300">Edit</button>
        </div>
        <div className="flex justify-between items-center">
          <span className="no-underline hover:underline">Email: {email}</span>
          <button onClick={() => setEditField("email")} className="px-4 py-2 ml-6 rounded-full bg-white/30 hover:bg-white/50 transition cursor-pointer focus:outline-none focus:ring focus:ring-green-300">Edit</button>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-4">Profile Image:</span>
          <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full border-2 border-white/70 mb-4 hover:border-green-500" />
          <button onClick={() => setEditField("profileImage")} className="px-4 py-2 rounded-full bg-white/30 hover:bg-white/50 transition cursor-pointer focus:outline-none focus:ring focus:ring-green-300">Edit</button>
        </div>
        <div className="flex justify-between items-center">
          <span className="no-underline hover:underline">Last Login: {lastLogin}</span>
        </div>
        <div className="flex justify-center">
          <button onClick={() => setEditField("password")} className="px-4 py-2 rounded-full bg-white/30 hover:bg-white/50 transition">Change Password</button>
        </div>
        <div className="flex justify-center">
          <button onClick={handleDelete} className="px-4 py-2 rounded-full bg-red-500/20 hover:bg-red-500/40 transition text-white cursor-not-allowed">Delete Account</button>
        </div>
      </div>

      {editField && (
        <form onSubmit={handleUpdate} className="mt-8 space-y-4">
          {editField === "username" && (
            <label className="block">
              New Username:
              <input type="text" value={username} onChange={(e) => setUsernameState(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-white/30 border-none outline-none" />
            </label>
          )}
          {editField === "email" && (
            <label className="block">
              New Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-white/30 border-none outline-none" />
            </label>
          )}
          {editField === "password" && (
            <label className="block">
              New Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-white/30 border-none outline-none" />
            </label>
          )}
          {editField === "profileImage" && (
            <label className="block">
              New Profile Image:
              <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} className="w-full px-4 py-2 rounded-lg bg-white/30 border-none outline-none" />
            </label>
          )}
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 rounded-full bg-white/30 hover:bg-white/50 transition">Update</button>
            <button type="button" onClick={() => setEditField(null)} className="px-4 py-2 rounded-full bg-white/30 hover:bg-white/50 transition">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserProfile;