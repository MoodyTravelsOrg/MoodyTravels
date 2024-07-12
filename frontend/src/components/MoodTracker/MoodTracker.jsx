import React, { useState, useEffect } from 'react';
import './MoodTracker.css';

const MoodTracker = ({ userId }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodLog, setMoodLog] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [edit, setEdit] = useState(false);


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
      console.log(err.message);
    }
  };

  // useEffect to fetch users mood every time a new user logs in:
  useEffect(() => {
    fetchMoodLog();
  }, [userId]);



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


  
 
  const handleGetRecommendations = async () => {
    try {
      const response = await fetch('http://localhost:4000/travel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Error getting recommendations: ${response.statusText}`);
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  return (
    <div className="MoodTrackerContainer">
      <h2>Mood Tracker</h2>
      <div className="MoodListContainer">
        {['happy', 'sad', 'angry', 'anxious', 'bored'].map((mood, index) => (
          <button
            key={index}
            className={`MoodButton ${selectedMood === mood ? 'selected' : ''}`}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
      <div>
        <button className="ActionButton" onClick={handleLogMood}>Log Mood</button>
        {(!edit && moodLog.length > 0) && <button className="ActionButton" onClick={() => setEdit(!edit)}>Edit Log</button>}
        {(edit && moodLog.length > 0) && <button className="ActionButton" onClick={() => setEdit(!edit)}>End Edit</button>}
        <button className="ActionButton" onClick={handleGetRecommendations}>Get Recommendations</button>
      </div>


      <div className="MoodLogContainer">
        <h3>Mood Log</h3>
        {moodLog.length > 0 && moodLog.map((entry) => {
          const date = new Date(entry.createdAt);
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString();
          return (
            <div key={entry._id} className="LogEntry">
              <p><span>{formattedDate} at {formattedTime}</span> </p>
              <h4>{entry.type}</h4>
              {edit && <button onClick={() => handleDeleteMood(entry._id)} className='editBtn'>Delete</button>}
              {edit && <button onClick={() => handleReplaceMood(entry._id)} className='editBtn'>Replace</button>}

            </div>
          )
        })}
      </div>


      <div className="RecommendationsContainer">
        <h3>Recommendations</h3>
        {recommendations.map((rec, index) => (
          <div key={index}>
            <h4>{rec.emotion}</h4>
            <p>{rec.emoji}</p>
            {rec.categories.map((cat, idx) => (
              <div key={idx}>
                <h5>{cat.name}</h5>
                {cat.destinations.map((dest, i) => (
                  <div key={i}>
                    <img src={dest.img} alt={dest.name} />
                    <p>{dest.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;





