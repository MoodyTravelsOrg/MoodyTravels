import React, { useState, useEffect } from 'react';
import './MoodTracker.css';

const MoodTracker = ({ userId }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodLog, setMoodLog] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMoodLog = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users/${userId}/moods`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`Error fetching mood log: ${response.statusText}`);
        }

        const data = await response.json();
        setMoodLog(data.moods.filter(mood => mood.deletedAt === null));
      } catch (error) {
        console.error('Error fetching mood log:', error);
      }
    };

    fetchMoodLog();
  }, [userId]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleLogMood = async () => {
    if (selectedMood) {
      const newLog = { type: selectedMood };
      try {
        const response = await fetch(`http://localhost:4000/users/${userId}/moods`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(newLog),
        });

        if (!response.ok) {
          throw new Error(`Error logging mood: ${response.statusText}`);
        }

        const data = await response.json();
        setMoodLog([data.moods[data.moods.length - 1], ...moodLog.slice(0, 4)]);
      } catch (error) {
        console.error('Error logging mood:', error);
      }
    }
  };

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
        throw new Error(`Error deleting mood: ${response.statusText}`);
      }

      setMoodLog(moodLog.filter(mood => mood._id !== moodId));
    } catch (error) {
      console.error('Error deleting mood:', error);
    }
  };

  const handleSaveMood = () => {
    console.log("Saving mood:", selectedMood);
 
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
        <button className="ActionButton" onClick={handleSaveMood}>Save Mood</button>
        <button className="ActionButton" onClick={handleGetRecommendations}>Get Recommendations</button>
      </div>
      <div className="MoodLogContainer">
        <h3>Mood Log</h3>
        {moodLog.map((entry) => (
          <div key={entry._id} className="LogEntry">
            {new Date(entry.createdAt).toLocaleDateString()} ---- {entry.type}
            <button onClick={() => handleDeleteMood(entry._id)}>Delete</button>
          </div>
        ))}
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





