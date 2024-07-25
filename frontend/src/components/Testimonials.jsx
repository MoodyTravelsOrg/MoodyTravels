import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/Context";

const Testimonials = () => {
  const { loggedInUserData, userId, isLoggedIn } = useContext(Context);
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hasPosted, setHasPosted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    rating: 1,
    comment: "",
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/testimonials`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error.message);
        }
        const data = await response.json();
        setTestimonials(data);

        if (userId) {
          const userTestimonial = data.find(
            (testimonial) => testimonial.username === loggedInUserData.username
          );
          if (userTestimonial) {
            setHasPosted(true);
          }
        }
      } catch (error) {
        alert("Error fetching testimonials", error);
      }
    };

    fetchTestimonials();
  }, [userId, loggedInUserData]);

  useEffect(() => {
    if (!isLoggedIn) {
      setFormData({ username: "", rating: 1, comment: "" });
      setHasPosted(false);
    }
  }, [isLoggedIn]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const avatarOptions = [
    "https://randomuser.me/api/portraits/lego/1.jpg",
    "https://randomuser.me/api/portraits/lego/2.jpg",
    "https://randomuser.me/api/portraits/lego/3.jpg",
    "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png",
    "https://kigali.walk21.com/wp-content/uploads/2023/10/Mesa-de-trabajo-1-e1696881708994.png",
    "https://cdn0.iconfinder.com/data/icons/user-interface-vol-3-12/66/68-512.png",
    "https://cdn3.iconfinder.com/data/icons/line-color-mix/66/Mix-22-512.png",
    "https://cdn0.iconfinder.com/data/icons/seo-and-marketing-volume-1/256/100-512.png",
    "https://cdn3.iconfinder.com/data/icons/user-interface-2463/24/user_profile_profile_personal_user_person-512.png",
    "https://cdn0.iconfinder.com/data/icons/user-interface-vol-3-12/66/68-512.png",
    "https://cdn1.iconfinder.com/data/icons/vibrancie-action/30/action_030-account-user-profile-avatar-256.png",
  ];

  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarOptions.length);
    return avatarOptions[randomIndex];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      rating: formData.rating,
      comment: formData.comment,
      avatar: userId ? loggedInUserData.profileImage : getRandomAvatar(),
      username: userId ? loggedInUserData.username : formData.username,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API}/testimonials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newTestimonial = await response.json();
      setTestimonials([...testimonials, newTestimonial]);
      setShowModal(false);
      setFormData({ username: "", rating: 1, comment: "" });
    } catch (error) {
      console.error("Error submitting testimonial", error);
    }
  };

  return (
    <div className="relative">
      <div className="testimonials py-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Our User Experiences
        </h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {testimonials
            .slice(0, showAll ? testimonials.length : 6)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-md w-80"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.username}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
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
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
        </div>

        {testimonials.length > 6 && (
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        <div className="flex justify-center mt-6">
          {hasPosted ? (
            <p className="text-white text-2xl">
              Thank you for your feedback! You have already submitted one.
            </p>
          ) : (
            <button
              className="bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
              onClick={() => setShowModal(true)}
            >
              Add Testimonial
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg w-96">
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
                    value={formData.username}
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
                  value={formData.rating}
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
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80"
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
