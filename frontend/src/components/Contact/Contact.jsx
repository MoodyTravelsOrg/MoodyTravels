// https://dev.to/wilsonsiaw/tutorial-react-emailjs-36bl#:~:text=Open%20the%20terminal%20and%20make%20sure%20you%20are,check%20that%20%22emailjs-com%22%20is%20listed%20in%20the%20dependencies.

// I added the code and functionalities of the contact form using emailjs i putted all the functions inside of the context  to keep the order and structure of our code( i already tested  it),  in order to visualize it and make it work you have to install first the library running on your terminal this command: "npm install emailjs-com", i used for now my dci email account but we can change it after.

// import React from "react";
// import { useContext } from 'react';
// import { Context } from "../../context/Context.jsx";


// const Contact = () => {
//   const { formData
//     , isSubmitted,  errors,  handleChangeContact, handleSubmitContact, handleSuccessForm, 
//    } = useContext(Context);

 
//    return (
//      <div className="max-w-[600px] p-5 w-full mt-24 mb-24 ml-[400px] bg-white/5 rounded-lg shadow-lg backdrop-blur-md border border-white/30 text-white transition-all duration-300 ease-in-out">
//        <h2 className="text-2xl mb-4">Contact Us</h2>
//        {!isSubmitted ? (
//          <form className="flex flex-col" onSubmit={(e) => {
//            handleSubmitContact(e);
//            if (!Object.keys(errors).length) { 
//              handleSuccessForm();
//            }
//          }}>
//            <div className="mb-4">
//              <label htmlFor="name" className="block mb-1">Name</label>
//              <input
//                type="text"
//                id="name"
//                name="name"
//                required
//                value={formData.name}
//                onChange={handleChangeContact}
//                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
//              />
//              {errors.name && <p className="text-red-500">{errors.name}</p>}
//            </div>
//            <div className="mb-4">
//              <label htmlFor="email" className="block mb-1">Email</label>
//              <input
//                type="email"
//                id="email"
//                name="email"
//                required
//                value={formData.email}
//                onChange={handleChangeContact}
//                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
//              />
//              {errors.email && <p className="text-red-500">{errors.email}</p>}
//            </div>
//            <div className="mb-4">
//              <label htmlFor="message" className="block mb-1">Message</label>
//              <textarea
//                id="message"
//                name="message"
//                required
//                value={formData.message}
//                onChange={handleChangeContact}
//                className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
//              ></textarea>
//              {errors.message && <p className="text-red-500">{errors.message}</p>}
//            </div>
//            <button
//              type="submit"
//              className="px-5 py-2 my-2 mx-1 border-none rounded-full bg-white/30 backdrop-blur-md text-gray-800 cursor-pointer transition-all duration-300 hover:bg-white/50 hover:text-black"
//            >
//              Send Message
//            </button>
//          </form>
//        ) : (
//          <p className="text-green-500">Thank you for your message. We will get back to you soon.</p>
//        )}
//      </div>
//    );
//  };
 
//  export default Contact;

// ! Since I had to change quite a bit of the code, I commented out the old code snippets above and left them there in case we need them later on.

import React, { useEffect, useContext } from "react";
import { Context } from "../../context/Context.jsx";

const Contact = () => {
  const { formData, isSubmitted, errors, handleChangeContact, handleSubmitContact, handleSuccessForm } = useContext(Context);

  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-darkGreenForBG/20 backdrop-blur-md transition-all duration-500 ease-in-out">
      <div className="w-full max-w-md bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h2>
          {!isSubmitted ? (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                handleSubmitContact(e);
                if (!Object.keys(errors).length) {
                  handleSuccessForm();
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChangeContact}
                  className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChangeContact}
                  className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChangeContact}
                  className="w-full p-2 border-none rounded-lg bg-white/30 text-white placeholder-white/50 h-32 resize-none"
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellowishGreenForTextandButtons text-darkGreenForText rounded-full hover:bg-white transition duration-300 flex items-center justify-center font-semibold"
                >
                  Send Message
                </button>
              </div> 
            </form>
          ) : (
            <p className="text-yellowishGreenForTextandButtons text-center text-lg">Thank you for your message. We will get back to you soon.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
