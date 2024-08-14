// import React, { useContext } from "react";
// import { Context } from "../context/Context";

// const Testimonials = () => {
//   const {
//     userId,
//     testimonials,
//     showModal,
//     setShowModal,
//     hasPosted,
//     showAll,
//     setShowAll,
//     testimonialData,
//     handleInputChange,
//     handleSubmit,
//   } = useContext(Context);

//   return (
//     <div className="relative">
//       <div className="testimonials py-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6">
//         <h2 className="text-3xl font-bold text-center mb-6 text-white">
//           Our User Experiences
//         </h2>
//         <div className="container mx-auto flex flex-wrap justify-center gap-8">
//           {testimonials
//             .toReversed()
//             .slice(0, showAll ? testimonials.length : 6)
//             .map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="testimonial bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md w-80"
//               >
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.username}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {testimonial.username}
//                     </h3>
//                     <div className="flex">
//                       {Array.from({ length: 5 }, (_, index) => (
//                         <span
//                           key={`${testimonial.id}-star-${index}`}
//                           className={
//                             index < testimonial.rating
//                               ? "text-yellow-500"
//                               : "text-gray-300"
//                           }
//                         >
//                           ★
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600">{testimonial.comment}</p>
//               </div>
//             ))}
//         </div>

//         {testimonials.length > 6 && (
//           <div className="flex justify-center mt-4">
//             <button
//               className="bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
//               onClick={() => setShowAll(!showAll)}
//             >
//               {showAll ? "Show Less" : "Show More"}
//             </button>
//           </div>
//         )}

//         <div className="flex justify-center mt-6">
//           {hasPosted ? (
//             <p className="text-white text-2xl">
//               Thank you for your feedback! You have already submitted one.
//             </p>
//           ) : (
//             <button
//               className="bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
//               onClick={() => setShowModal(true)}
//             >
//               Add Testimonial
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Add Testimonial
//             </h2>
//             <form onSubmit={handleSubmit}>
//               {!userId && (
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-300 mb-2"
//                     htmlFor="username"
//                   >
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={testimonialData.username}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
//                     required
//                   />
//                 </div>
//               )}
//               <div className="mb-4">
//                 <label className="block text-gray-300 mb-2" htmlFor="rating">
//                   Rating
//                 </label>
//                 <select
//                   id="rating"
//                   name="rating"
//                   value={testimonialData.rating}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
//                   required
//                 >
//                   <option value={1}>1</option>
//                   <option value={2}>2</option>
//                   <option value={3}>3</option>
//                   <option value={4}>4</option>
//                   <option value={5}>5</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-300 mb-2" htmlFor="comment">
//                   Comment
//                 </label>
//                 <textarea
//                   id="comment"
//                   name="comment"
//                   value={testimonialData.comment}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   className="bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Testimonials;

// * New Styling:

import React, { useContext } from "react";
import { Context } from "../context/Context";

const Testimonials = () => {
  const {
    userId,
    testimonials,
    showModal,
    setShowModal,
    hasPosted,
    showAll,
    setShowAll,
    testimonialData,
    handleInputChange,
    handleSubmit,
  } = useContext(Context);

  return (
    <div className={`relative ${showModal ? 'blur-background' : ''}`}>
      <div className="py-8 bg-darkGreenForBG/40  backdrop-blur-md shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          What Users Say About Us
        </h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {testimonials
            .toReversed()
            .slice(0, showAll ? testimonials.length : 6)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md w-80 transition-transform duration-300 ease-in-out transform hover:scale-105 border-double border-4 border-yellowishGreenForTextandButtons"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.username}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.username}
                    </h3>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={`${testimonial.id}-star-${index}`}
                          className={
                            index < testimonial.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/80">{testimonial.comment}</p>
              </div>
            ))}
        </div>

        {testimonials.length > 6 && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold px-8 py-3 mt-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        <div className="flex justify-center mt-6">
          {hasPosted ? (
            <p className="text-white text-2xl text-center max-w-xl md:max-w-md sm:max-w-xs">
              Thank you for your feedback! You have already submitted one.
            </p>
          ) : (
            <button
              className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
              onClick={() => setShowModal(true)}
            >
              Add Testimonial
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-darkGreenForBG backdrop-blur-md p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Add Testimonial
            </h2>
            <form onSubmit={handleSubmit}>
              {!userId && (
                <div className="mb-4">
                  <label
                    className="block text-gray-300 mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={testimonialData.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="rating">
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={testimonialData.rating}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
                  required
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="comment">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={testimonialData.comment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
                  required
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="bg-red-500 text-white font-semibold hover:bg-red-600 px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellowishGreenForTextandButtons text-darkGreenForText font-semibold px-8 py-3 rounded-full hover:bg-white transition duration-300 flex items-center justify-center font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
