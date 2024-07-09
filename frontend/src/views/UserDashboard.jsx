// src/views/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

// component to select the user's current mood
const MoodSelector = ({ setMood }) => {
  return (
    <div className="glass-card">
      <h2>¿Cómo te sientes hoy?</h2>
      <div className="mood-buttons">
        {['happy', 'sad', 'angry', 'tired', 'bored', 'excited', 'relaxed', 'anxious', 'stressed', 'lonely', 'loved', 'motivated', 'inspired', 'hopeful', 'proud'].map(mood => (
          <button key={mood} onClick={() => setMood(mood)}>{mood}</button>
        ))}
      </div>
    </div>
  );
};

// component to display travel recommendations based on the selected mood
const TravelRecommendations = ({ mood }) => {
  const [recommendations, setRecommendations] = useState([]);

  // Function to fetch travel recommendations saved in the database
  // const fetchRecommendations = async () => {
  //   // Aquí iría la lógica para obtener las recomendaciones de la API
  //   // basadas en el estado de ánimo seleccionado
  // };


  


  useEffect(() => {
    const fetchRecommendations = async () => {
      // Aquí iría la lógica para obtener las recomendaciones de la API
      // basadas en el estado de ánimo seleccionado
      // En este ejemplo, simplemente se simula la carga de datos
      const recommendationsData = [
        { id: 1, destination: 'Destino 1' },
        { id: 2, destination: 'Destino 2' },
        { id: 3, destination: 'Destino 3' },
      ];
      setRecommendations(recommendationsData);
    };
    if (mood) {
      fetchRecommendations();
    }
  }, [mood]);

  return (
    <div className="glass-card">
      <h2>Travel Recomendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((rec) => (
          <div key={rec.id}>
            <h3>{rec.destination}</h3>
            <button onClick={() => {/* lógica para guardar la recomendación */}}>
              Guardar
            </button>
          </div>
        ))
      ) : (
        <p>no recomendations avaliable</p>
      )}
    </div>
  );
};

// main component for the dashboard
const Dashboard = ({ setMood, mood }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <MoodSelector setMood={setMood} />
      {mood && <TravelRecommendations mood={mood} />}
      <button onClick={() => navigate('/profile')}>Back to your Profile</button>
    </div>
  );
};

const UserDashboard = ({userId, setUsername, setUserImage }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profileImage: '',
    moods: []
  });
  const [editing, setEditing] = useState(false);
  const [newMood, setNewMood] = useState('');
  const [mood, setMood] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/user/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMoodChange = (e) => {
    setNewMood(e.target.value);
  };

  const handleAddMood = () => {
    if (newMood) {
      setUserData((prevData) => ({
        ...prevData,
        moods: [...prevData.moods, newMood]
      }));
      setNewMood('');
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUserData(updatedUser);
        setUsername(updatedUser.username);
        setUserImage(updatedUser.profileImage);
        setEditing(false);
      } else {
        throw new Error('Failed to save changes');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-dashboard glass-container">
      <h2>User Dashboard</h2>
      {editing ? (
        <div className="glass-card">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <label>Profile Image URL:</label>
          <input
            type="text"
            name="profileImage"
            value={userData.profileImage}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
      ) : (
        <div className="glass-card">
          <p><span>Username: {userData.username}</span></p>
          <p>Email: {userData.email}</p>
          <img src={userData.profileImage} alt="Profile" />
          <button onClick={() => setEditing(true)}>Editar Perfil</button>
        </div>
      )}
      <div className="glass-card">
        <h3>Tracker de Ánimo</h3>
        <ul>
          {userData.moods.map((mood, index) => (
            <li key={index}>{mood}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newMood}
          onChange={handleMoodChange}
          placeholder="Añadir nuevo ánimo"
        />
        <button onClick={handleAddMood}>Añadir Ánimo</button>
      </div>
      <Dashboard setMood={setMood} mood={mood} />
    </div>
  );
};

export default UserDashboard;

