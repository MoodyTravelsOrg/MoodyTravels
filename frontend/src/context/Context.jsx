import React from 'react'
import { createContext, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import defaultProfileImage from '../assets/default-profile.png';

export const Context = createContext()

function ContextProvider({ children }) {

  // ? Section 1: All state variables to pass to the children: 

  // from App.jsx:
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();

  // from Login.jsx:
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  // from MoodTracker.jsx:
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodLog, setMoodLog] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [edit, setEdit] = useState(false);

  // from Register.jsx:
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const fileInput = useRef(null);
  const recaptchaRef = useRef(null);

// from TravelMood.jsx:
  const [selectedEmotion, setSelectedEmotion] = useState({
    emotion: "",
    emoji: "",
    categories: []
  });
  const [selectedCategory, setSelectedCategory] = useState({});
  const [showCategories, setShowCategories] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);


  //---------------------------------------------------------------------------------------------

  // ? All Section 2: functions to pass to the children: 
  // from App.jsx:
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userImage');
    setUsername('');
    setUserId(null);
    setUserImage(null);
    setPassword("");
    setConfirmPassword("")
    setEmail("")
    setIsAuthenticated(false);
    setError("");
    navigate('/');
  };

  // from Login.jsx:

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

        localStorage.setItem('username', userData.username);
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('userImage', userData.profileImage);

        setUserId(userData.id);
        setUsername(userData.username);

        setIsAuthenticated(true);

        navigate("/"); // This will redirect the user to the home page after successful login
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      alert(error.message);
      setError(error.message)
    }
  }

  // from MoodTracker.jsx:
  // function to get user Mood:
  const fetchMoodLog = async () => {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}`, {
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
      setMoodLog(data.moods);
      localStorage.setItem('userMood', JSON.stringify(data.moods));
    } catch (err) {
      alert(err.message)
    }
  };

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
        const response = await fetch(`http://localhost:4000/users/${userId}/moods`, {
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
        await fetchMoodLog();
        setSelectedMood(null);
        setEdit(false);
      } catch (err) {
        setSelectedMood(null);
        alert(err.message);
      }
    }
  };

  // funtion to delete mood:
  const handleDeleteMood = async (moodId) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}/${moodId}`, {
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
      await fetchMoodLog();
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
        const response = await fetch(`http://localhost:4000/users/${userId}/${moodId}`, {
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
        await fetchMoodLog();
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
        const  errorData  = await response.json();
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
      formData.append('profileImage', profileImage);
      formData.append('recaptchaToken', recaptchaToken);

      const settings = {
        method: "POST",
        credentials: "include",
        body: formData,
      }

      const response = await fetch(`${import.meta.env.VITE_API}/register`, settings);

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.id);
        localStorage.setItem('userImage', data.profileImage || defaultProfileImage);
        setUserId(data.id);
        setIsAuthenticated(true);
        setUsername(data.username);
        setProfileImage(data.profileImage || defaultProfileImage);

        fileInput.current.value = "";
        recaptchaRef.current.reset();
        setRecaptchaToken("");
        setPassword("")
        setConfirmPassword("")
        alert(`Registration successful. Welcome, ${data.username}!`);
        navigate('/');
        /* refreshPage(); */
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  }



  // from TravelMood.jsx:
  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setShowCategories(true);
    setSelectedCategory('');
    setShowDestinations(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowDestinations(true);
  };

  const handleDestinationClick = (destination) => {
    navigate(`/destination/${destination.name}`, { state: { destination } });
  };

  const handleBackClick = () => {
    if (showDestinations) {
      setShowDestinations(false);
      setSelectedCategory('');
    } else if (showCategories) {
      setShowCategories(false);
      setSelectedEmotion('');
    }
  };

function resetInputs(){
  setUsername("");
  setPassword("");
  setError("")
  setConfirmPassword("")
}
  

  return (
    <Context.Provider value={{
      isAuthenticated, setIsAuthenticated, username, setUsername, 
      userId, setUserId, userImage, setUserImage, handleLogout,
      password, setPassword, handleLogin, error, setError, setEmail,
      selectedMood, setSelectedMood, moodLog, setMoodLog, 
      recommendations,  setRecommendations, edit, setEdit, handleLogMood, 
      handleDeleteMood, handleMoodSelect, handleReplaceMood, fetchMoodLog,
      confirmPassword, setConfirmPassword, recaptchaToken, setRecaptchaToken, 
      profileImage, setProfileImage, fileInput, recaptchaRef, handleRegister,
      selectedEmotion, setSelectedEmotion, selectedCategory, setSelectedCategory, 
      showCategories, setShowCategories, showDestinations, setShowDestinations, 
      handleGetRecommendations, handleEmotionClick, handleCategoryClick, handleDestinationClick, 
      handleBackClick, navigate, resetInputs}}>

      {children}

    </Context.Provider>
  )
}

export default ContextProvider
