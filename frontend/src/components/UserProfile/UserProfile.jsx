// import React, { useContext, useState } from "react";
// import { Context } from "../../context/Context";
// import {
//   FaUserEdit,
//   FaKey,
//   FaTrash,
//   FaHome,
//   FaEye,
//   FaEyeSlash,
// } from "react-icons/fa";
// import { BsFillCloudCheckFill } from "react-icons/bs";


// const UserProfile = () => {
//   const {
//     navigate,
//     username,
//     password,
//     error,
//     setUsername,
//     setPassword,
//     setProfileImage,
//     fileInput,
//     loggedInUserData,
//     handleUpdate,
//     handleDelete,
//     editField,
//     setEditField,
//     resetInputs,
//   } = useContext(Context);


//   const [showPassword, setShowPassword] = useState(false);


//   const handleSave = (event) => {
//     event.preventDefault();
//     handleUpdate(event); // event is passed to handleUpdate to prevent default form submission
//     setEditField(null);
//   };


//   const handleCancel = () => {
//     resetInputs(); // Reset inputs when cancel is clicked
//     setEditField(null);
//   };


//   const handleEditFieldChange = (field) => {
//     resetInputs(); // Reset inputs when a new field is selected for editing
//     setEditField(field);
//   };


//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };


//   const renderEditField = (field) => {
//     switch (field) {
//       case "profileImage":
//         return (
//           <div className="flex items-center space-x-2">
//             <input
//               type="file"
//               onChange={(e) => setProfileImage(e.target.files[0])}
//               ref={fileInput}
//               className="w-full p-2 border-none rounded-lg backdrop-blur-md bg-white/30 text-black"
//             />
//             <BsFillCloudCheckFill
//               className="text-green-500 text-lg cursor-pointer"
//               onClick={handleSave}
//             />
//             <FaTrash
//               className="text-red-500 text-lg cursor-pointer"
//               onClick={handleCancel}
//             />
//           </div>
//         );
//       case "username":
//         return (
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border-none rounded-lg backdrop-blur-md bg-white/30 text-black"
//             />
//             <BsFillCloudCheckFill
//               className="text-green-500 text-lg cursor-pointer"
//               onClick={handleSave}
//             />
//             <FaTrash
//               className="text-red-500 text-lg cursor-pointer"
//               onClick={handleCancel}
//             />
//           </div>
//         );
//       case "password":
//         return (
//           <div className="flex items-center space-x-2">
//             <div className="relative w-full">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 pr-10 border-none rounded-lg backdrop-blur-md bg-white/30 text-black"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//               >
//                 {showPassword ? (
//                   <FaEyeSlash className="text-gray-700" />
//                 ) : (
//                   <FaEye className="text-gray-700" />
//                 )}
//               </button>
//             </div>
//             <BsFillCloudCheckFill
//               className="text-green-500 text-lg cursor-pointer"
//               onClick={handleSave}
//             />
//             <FaTrash
//               className="text-red-500 text-lg cursor-pointer"
//               onClick={handleCancel}
//             />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };


//   // * I made quite a few changes to the original code to make it work with the video background and other components. The tailwind.config file was also updated to include the necessary classes (and effects).


//   return (
//     <div
//       className="min-h-screen w-full bg-cover bg-center bg-fixed pt-16"
//       style={{ backgroundImage: "url('/images/inca-mayan-design-sculpted-stones.jpg')" }}
//     >
//     <div className="relative max-w-5xl w-full my-24 mx-auto rounded-lg shadow-lg text-white transition-all duration-300 ease-in-out group overflow-hidden mt-48">
//       <video autoPlay loop muted className="w-full h-full object-cover">
//         <source
//           src="/videos/Ruins_Drone_Short.mp4" // This is the shorted version of the video which should work fine, but we agreed to get rid of the video background now.
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//         {/* I guess, it's not a bad idea to have a fallback for browsers that don't support the video tag... */}
//       </video>


//       <div
//         className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
//         style={{ top: "80%", right: "55%" }}
//       >
//         {/* Ok, this took me a while... I had to use a separate "style" prop to move the text the way I wanted it to be... */}
//         <p className="text-white text-lg bg-black bg-opacity-50 px-4 py-2 rounded animate-pulse-border">
//           Wanna change something? Hover me!
//         </p>
//       </div>


//       <div
//         className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
//         style={{ top: "80%", right: "55%" }}
//       ></div>


//       <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <div className="p-8">
//           <h2 className="mb-5 text-2xl text-center">Welcome to your data jungle</h2>
//           <div className="flex flex-col gap-4">
//             <div className="flex items-center justify-between w-full p-2.5 border-b border-white/20">
//               <span className="text-lg">Profile Image:</span>
//               <img
//                 src={loggedInUserData.profileImage}
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full border-2 border-white/70 cursor-pointer"
//                 onClick={() => handleEditFieldChange("profileImage")}
//               />
//             </div>
//             {editField === "profileImage" && renderEditField("profileImage")}


//             <div className="flex items-center justify-between w-full p-2.5 border-b border-white/20">
//               <span className="text-lg">Username:</span>
//               {editField === "username" ? (
//                 renderEditField("username")
//               ) : (
//                 <>
//                   <span>{loggedInUserData.username}</span>
//                   <FaUserEdit
//                     className="text-lg cursor-pointer ml-2.5 text-white"
//                     onClick={() => handleEditFieldChange("username")}
//                   />
//                 </>
//               )}
//             </div>


//             <div className="flex items-center justify-between w-full p-2.5 border-b border-white/20">
//               <span className="text-lg">Password:</span>
//               {editField === "password" ? (
//                 renderEditField("password")
//               ) : (
//                 <>
//                   <span>*****</span>
//                   <FaKey
//                     className="text-lg cursor-pointer ml-2.5 text-white"
//                     onClick={() => handleEditFieldChange("password")}
//                   />
//                 </>
//               )}
//             </div>


//             {error && (
//               <p className="text-red-500 text-center mb-2.5">{error}</p>
//             )}


//             {/* Just testing a few effects... But this is an overkill; especially here. Don't wanna delete it just yet bc I might make use of it somewhere else. */}


//             {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}


//             {/* <div className="relative group">
//                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//                <button
//                  className="relative w-full px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6"
//                  onClick={handleDelete}
//                >
//                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
//                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
//                  </svg>
//                  <span className="text-slate-800">Delete Account</span>
//                </button>
//             </div> */}


//             {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}


//             <div className="flex justify-center space-x-4 mt-4">
//               <button
//                 className="px-4 py-2 mt-14 bg-red-500/20 text-white rounded-full hover:bg-red-600 transition duration-300 flex items-center"
//                 onClick={handleDelete}
//               >
//                 <FaTrash className="mr-2" />
//                 Delete Account
//               </button>
//               <button
//                 className="px-4 py-2 mt-14 bg-green-500/50 text-white rounded-full hover:bg-green-600 transition duration-300 flex items-center"
//                 onClick={() => navigate("/")}
//               >
//                 <FaHome className="mr-2" />
//                 Homepage
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };


// export default UserProfile;


// ! The above code was the first iteration with the additional bg-img + video within the card-element. I'll leave it commented out for now, but I'll remove it later on.


import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { FaUserEdit, FaKey, FaSave, FaTimes, FaTrash, FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsFillCloudCheckFill } from "react-icons/bs";


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
         <div className="flex items-center space-x-2 w-full">
           <input
             type="file"
             onChange={(e) => setProfileImage(e.target.files[0])}
             ref={fileInput}
             className="w-full p-2 border-none rounded-lg bg-white/30 text-black"
           />
           <BsFillCloudCheckFill className="text-yellowishGreen text-lg cursor-pointer" onClick={handleSave} />
           <FaTrash className="text-red-500 text-lg cursor-pointer" onClick={handleCancel} />
         </div>
       );
     case "username":
       return (
         <div className="mt-16 flex items-center space-x-2 w-full">
           <input
             type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             className="flex-grow p-2 border-none rounded-lg bg-white/30 text-black"
           />
           <BsFillCloudCheckFill className="text-yellowishGreen text-lg cursor-pointer" onClick={handleSave} />
           <FaTrash className="text-red-500 text-lg cursor-pointer" onClick={handleCancel} />
         </div>
       );
     case "password":
       return (
         <div className="flex items-center space-x-2 w-full">
           <div className="relative flex-grow">
             <input
               type={showPassword ? "text" : "password"}
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full p-2 pr-10 border-none rounded-lg bg-white/30 text-black"
             />
             <button
               type="button"
               onClick={togglePasswordVisibility}
               className="absolute inset-y-0 right-0 pr-3 flex items-center"
             >
               {showPassword ? <FaEyeSlash className="text-gray-700" /> : <FaEye className="text-gray-700" />}
             </button>
           </div>
           <BsFillCloudCheckFill className="text-yellowishGreen text-lg cursor-pointer" onClick={handleSave} />
           <FaTrash className="text-red-500 text-lg cursor-pointer" onClick={handleCancel} />
         </div>
       );
     default:
       return null;
   }
 };


 return (
   // <div className="flex justify-center items-center min-h-screen pt-16 px-4">
   //   <div className="relative w-full max-w-3xl bg-green-100 rounded-lg shadow-xl overflow-hidden group transition-all duration-300 hover:bg-opacity-30">
   //     <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
   //     <div className="absolute inset-[3px] bg-green-100 rounded-lg z-10 transition-all duration-300 group-hover:bg-opacity-30"></div>
   //     <div className="relative z-20 p-10">
   //       <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">User Profile</h2>
   //       <div className="space-y-8">
   //         <div className="flex items-center justify-between">
   //           <span className="text-xl font-medium text-green-700">Profile Image:</span>


   // ? ------ Just playing around with at least one interesting effect... Is kinda cool. If you guys don't like it, there's the other version above. I'll leave it commented out for now ------


   <div className="flex justify-center items-center min-h-screen pt-16 px-4">
     <div className="relative w-full max-w-3xl rounded-lg shadow-xl overflow-hidden group">
       <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
       <div className="absolute inset-0 bg-transparent rounded-lg z-20 pointer-events-none transition-all duration-300 group-hover:bg-opacity-70"></div>


       {/* <div className="relative bg-green-100/70 rounded-lg z-10 transition-all duration-300 group-hover:bg-opacity-30 p-10"> */}
       <div className="relative bg-green-100 rounded-lg z-10 transition-all duration-300 group-hover:bg-opacity-30 p-10">
         {/* This is a triple-layer effect with a trans-duration of 700ms. Test the one above which is commented out. That one has only 2 layers and starts with a somewhat transparent card. */}


         <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">User Profile</h2>
         <div className="space-y-8">
           <div className="flex items-center justify-between">
             <span className="text-xl font-medium text-green-700">Profile Image:</span>


   {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


             <img src={loggedInUserData.profileImage} alt="Profile" className="mr-10 w-32 h-32 rounded-full border-4 border-green-700 cursor-pointer hover:border-yellowishGreen transition-all duration-300" onClick={() => handleEditFieldChange("profileImage")} />
           </div>
           {editField === "profileImage" && renderEditField("profileImage")}
          
           <div className="flex items-center justify-between">
             <span className="mt-16 mr-6 text-xl font-medium text-green-700">Username:</span>
             {editField === "username" ? (
               renderEditField("username")
             ) : (
               <div className="flex items-center">
                 <span className="mt-16 text-green-800 mr-2 text-xl">{loggedInUserData.username}</span>
                 <FaUserEdit className="mt-16 ml-28 text-2xl cursor-pointer text-green-700 hover:text-yellowishGreen" onClick={() => handleEditFieldChange("username")} />
               </div>
             )}
           </div>
          
           <div className="flex items-center justify-between">
             <span className="mr-6 text-xl font-medium text-green-700">Password:</span>
             {editField === "password" ? (
               renderEditField("password")
             ) : (
               <div className="flex items-center">
                 <span className="text-green-800 mr-2 text-xl">*****</span>
                 <FaKey className="ml-28 text-2xl cursor-pointer text-green-700 hover:text-yellowishGreen" onClick={() => handleEditFieldChange("password")} />
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
               className="mt-10 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-800 transition duration-300 flex items-center text-lg"
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