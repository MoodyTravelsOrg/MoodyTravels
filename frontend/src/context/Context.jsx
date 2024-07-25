import React from 'react'
import { createContext, useState, useRef, useEffect } from 'react'
import { json, useNavigate} from "react-router-dom";
import defaultProfileImage from "../../public/default-profile.png"

import emailjs from "emailjs-com";
export const Context = createContext()

function ContextProvider({ children }) {

  // ? Section 1: All state variables to pass to the children: 

  // login/register inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const fileInput = useRef(null);
  const recaptchaRef = useRef(null);

  const [loggedInUserData, setLoggedInUserData] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [edit, setEdit] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState({
    emotion: "",
    emoji: "",
    categories: []
  });
  const [selectedCategory, setSelectedCategory] = useState({});
  const [showCategories, setShowCategories] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);

  const [editField, setEditField] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hasPosted, setHasPosted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [testimonialData, setTestimonialData] = useState({
    username: "",
    rating: 1,
    comment: "",
  });


  console.log("recommendations", recommendations)
  console.log("selectedEmotion", selectedEmotion)
  console.log("selectedCategory", selectedCategory)
  


  //---------------------------------------------------------------------------------------------

  // functions for the contact  form



  // ? All Section 2: functions to pass to the children: 

  // helper function to get tokens:





  async function fetchWithToken(url, settings) {
    const firstAccessResponse = await fetch(url, settings);

    if (firstAccessResponse.ok) {
      return firstAccessResponse;
    } else {

      console.log("Token expired!")
      const refreshSettings = {
        credentials: "include"
      }
      const refreshResponse = await fetch("http://localhost:4000/refresh-token", refreshSettings);
      if (refreshResponse.ok) {
        console.log("New cookies received!")
        const secondAccessResponse = await fetch(url, settings);
        return secondAccessResponse;
      } else {
        return refreshResponse;
      }
    }
  }


  // function to clear the cookies:

  async function clearCookies() {

    try {
      const response = await fetch("http://localhost:4000/resetCookies", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        credentials: "include"
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error.message);
      }
      const message = await response.json()
      console.log(message.message)
    } catch (err) {
      alert(err.message)
      console.log(err.message)
    }
  }


  // function to get loggedIn users data and save the data in local storage:
  const getUserData = async () => {
    try {
      const response = await fetchWithToken(`http://localhost:4000/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const data = await response.json();
      setLoggedInUserData(data)
      localStorage.setItem('loggedInUserData', JSON.stringify(data));
      localStorage.setItem('userId', data.id);
    } catch (err) {
      alert(err.message)
    }
  };

  // useEffect to call the getUsersData and the get users data from local storage:
  useEffect(() => {
    if (userId) {
      getUserData();
    }
    const storedUserData = localStorage.getItem('loggedInUserData');
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId && storedUserData) {
      setUserId(storedUserId);
      setLoggedInUserData(JSON.parse(storedUserData))
      setIsLoggedIn(true);
    }
  }, [userId]);


  // logout.jsx:
  const handleLogout = () => {
    localStorage.clear()
    setUserId(null);
    setIsLoggedIn(false);
    setError("");
    clearCookies()
    navigate('/');
  };

  // The handleLogin function is created to handle the login process. The fetch request is made to the login endpoint with the username and password in the body. If the response is ok, the user data is stored in the state. If the response is not ok, an error message is thrown.
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    try {
      const settings = {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/JSON",
        },
        credentials: "include",
      };
      const response = await fetch(
        `${import.meta.env.VITE_API}/login`,
        settings
      );

      if (response.ok) {
        const userData = await response.json();
        setUserId(userData.id);
        setIsLoggedIn(true);
        navigate("/"); // This will redirect the user to the home page after successful login
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      setError(error.message)
    }
  }

  // MoodTracker:
  // function to select a mood:
  const handleMoodSelect = (mood) => {
    if (selectedMood === mood) {
      setSelectedMood(null);
    } else {
      setSelectedMood(mood)
    }
  };

  // function to log the mood:
  const handleLogMood = async () => {
    if (!selectedMood) {
      alert("Please select a mood before logging")
    } else {
      try {

        const response = await fetchWithToken(`http://localhost:4000/users/${userId}/moods`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ selectedMood }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error.message);
        }
        await getUserData();
        setSelectedMood(null);
        setEdit(false);
      } catch (err) {
        setSelectedMood(null);
        alert(err.message);
      }
    }
  };

  // function to delete mood:
  const handleDeleteMood = async (moodId) => {
    try {

      const response = await fetchWithToken(`http://localhost:4000/users/${userId}/moods/${moodId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      await getUserData();
      setSelectedMood(null)
    } catch (err) {
      alert(err.message);
    }
  };

  // function to replace mood:
  const handleReplaceMood = async (moodId) => {
    try {
      if (!selectedMood) {
        alert("Please select a mood to Replace with")
      } else {
        const response = await fetchWithToken(`http://localhost:4000/users/${userId}/moods/${moodId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ selectedMood }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error.message);
        }
        await getUserData();
        setSelectedMood(null)

      }
    } catch (err) {
      alert(err.message);
    }
  };

  async function handleGetRecommendations() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/travel`);
      if (response.ok) {
        const recommendations = await response.json();
        setRecommendations(recommendations);

      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // from Register.jsx:
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('profileImage', profileImage ? profileImage : defaultProfileImage);
      formData.append('recaptchaToken', recaptchaToken);

      const settings = {
        method: "POST",
        credentials: "include",
        body: formData,
      }

      const response = await fetch(`${import.meta.env.VITE_API}/register`, settings);

      if (response.ok) {
        const data = await response.json();
        setUserId(data.id);
        setIsLoggedIn(true);

        fileInput.current.value = "";
        recaptchaRef.current.reset();
        setRecaptchaToken("");
        setPassword("")
        setConfirmPassword("")
        alert(`Registration successful. Welcome, ${data.username}!`);
        navigate('/');

      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }
  // from TravelMood.jsx:
  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setShowCategories(true);
    setSelectedCategory('');
    setShowDestinations(false);
  };

  const handleCategoryClick = () => {
    if (!selectedCategory) {
      alert("Please select a category first")
    } else {
      setShowDestinations(true);
    }
  };

  const handleDestinationClick = (destination) => {
    navigate(`/destination/${destination.name}`, { state: { destination } });
  };

  const handleBackClick = () => {
    setShowDestinations(false);
    setSelectedCategory('');
  };

  // userProfile:

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    // setSuccess("");
  
    try {
      const formData = new FormData();
      if (username) formData.append("username", username);
      if (password) formData.append("password", password);
      if (profileImage) formData.append("profileImage", profileImage);
  
      const response = await fetchWithToken(`${import.meta.env.VITE_API}/users/${userId}`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });
  
      if (response.ok) {
        await getUserData();
        setEditField(null);
        if (fileInput.current) fileInput.current.value = "";
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return;
    }
    try {
      const response = await fetchWithToken(`${import.meta.env.VITE_API}/users/${userId}`, {
        method: "DELETE",
        credentials: "include"
      });
  
      if (response.ok) {
        const message = await response.json();
        alert(message.message);
        handleLogout()
        navigate("/");
        /* window.location.reload(); */
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // functions from the contact form component:

  const validateForm = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) {
      errors.name = 'Name must include first and last name with letters only.';
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format.';
    }

    if (formData.message.trim() === '') {
      errors.message = 'Message must not be empty.';
    } else if (formData.message.length > 500) {
      errors.message = 'Message must not exceed 500 characters.';
    }

    return errors;
  };
  const handleChangeContact = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        "service_h9hrn3c",
        "template_p0fwgun",
        e.target,
        "saxPj0YWm0tmDxrHk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleSuccessForm = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      resetForm();
      navigate('/');
    }, 4000);
  };
  //Functions from the testimonials component:
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
        
        // Sort testimonials by date or last added first
        const sortedTestimonials = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setTestimonials(sortedTestimonials);

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
      setTestimonialData({ username: "", rating: 1, comment: "" });
      setHasPosted(false);
    }
  }, [isLoggedIn]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonialData({ ...testimonialData, [name]: value });
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
      rating: testimonialData.rating,
      comment: testimonialData.comment,
      avatar: userId ? loggedInUserData.profileImage : getRandomAvatar(),
      username: userId ? loggedInUserData.username : testimonialData.username,
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
      setTestimonials([newTestimonial, ...testimonials]);
      setShowModal(false);
      setTestimonialData({ username: "", rating: 1, comment: "" });
    } catch (error) {
      console.error("Error submitting testimonial", error);
    }
  };

  // function to reset all inputs when navigating to other components:
  function resetInputs() {
    setUsername("");
    setPassword("");
    setError("")
    setConfirmPassword("")
    setSelectedEmotion("");
    setSelectedCategory("");
    setShowCategories(false);
    setShowDestinations(false);
  }






console.log(selectedEmotion);

  return (
    <Context.Provider value={{
      isLoggedIn, setIsLoggedIn, username, setUsername,
      userId, setUserId, handleLogout,
      password, setPassword, handleLogin, error, setError, setEmail,
      selectedMood, setSelectedMood,
      recommendations, setRecommendations, edit, setEdit, handleLogMood,
      handleDeleteMood, handleMoodSelect, handleReplaceMood, getUserData,
      confirmPassword, setConfirmPassword, recaptchaToken, setRecaptchaToken,
      profileImage, setProfileImage, fileInput, recaptchaRef, handleRegister,
      selectedEmotion, setSelectedEmotion, selectedCategory, setSelectedCategory,
      showCategories, setShowCategories, showDestinations, setShowDestinations,
      handleGetRecommendations, handleEmotionClick, handleCategoryClick, handleDestinationClick,
      handleBackClick, navigate, resetInputs, loggedInUserData, setLoggedInUserData,
      editField, setEditField, handleUpdate, handleDelete, formData, setFormData, isSubmitted,setIsSubmitted,validateForm,handleChangeContact,handleSubmitContact,errors, resetForm, handleSuccessForm, testimonials,
      showModal,
      setShowModal,
      hasPosted,
      showAll,
      setShowAll,
      testimonialData,
      setTestimonialData,
      handleInputChange,
      handleSubmit,
    }}>

      {children}

    </Context.Provider>
  )
}

export default ContextProvider
