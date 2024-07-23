// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <form className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" name="message" required></textarea>
//         </div>
//         <button type="submit" className="submit-button">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

// ! Tailwind CSS:

import React from "react";
import { useContext } from 'react';
import { Context } from "../../context/Context.jsx";

const Contact = () => {
  const { formData
    , setFormData, isSubmitted, setIsSubmitted, errors, setErrors, handleChangeContact, handleSubmitContact
   } = useContext(Context);


   return (
    <div className="max-w-[600px] p-5 w-full mt-24 mb-24 ml-[400px] bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white transition-all duration-300 ease-in-out">
      <h2 className="text-2xl mb-4">Contact Us</h2>
      {!isSubmitted ? (
        <form className="flex flex-col" onSubmit={handleSubmitContact}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChangeContact}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChangeContact}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChangeContact}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="px-5 py-2 my-2 mx-1 border-none rounded-full bg-white/30 backdrop-blur-md text-gray-800 cursor-pointer transition-all duration-300 hover:bg-white/50 hover:text-black"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-500">Thank you for your message. We will get back to you soon.</p>
      )}
    </div>
  );
};

export default Contact;