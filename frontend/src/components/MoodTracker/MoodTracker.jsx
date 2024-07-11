import React, { useState, useEffect } from 'react';
import './MoodTracker.css';

const moods = ["happy", "sad", "angry", "excited", "bored", "anxious", "calm", "tired", "stressed", "relaxed"];

const MoodTracker = ({ userId }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodLog, setMoodLog] = useState([]);

  useEffect(() => {
    // Fetch the initial mood log from the backend
    fetch(`http://localhost:4000/users/${userId}/moods`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setMoodLog(data.moods.filter(mood => mood.deletedAt === null)))
      .catch(error => console.error('Error fetching mood log:', error));
  }, [userId]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleLogMood = () => {
    if (selectedMood) {
      const newLog = { type: selectedMood };
      fetch(`http://localhost:4000/users/${userId}/moods`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLog),
      })
        .then(response => response.json())
        .then(data => setMoodLog([data.moods[data.moods.length - 1], ...moodLog.slice(0, 4)]))
        .catch(error => console.error('Error logging mood:', error));
    }
  };

  const handleDeleteMood = (moodId) => {
    fetch(`http://localhost:4000/users/${userId}/${moodId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          setMoodLog(moodLog.filter(mood => mood._id !== moodId));
        } else {
          console.error('Error deleting mood:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting mood:', error));
  };

  const handleSaveMood = () => {
    console.log("Saving mood:", selectedMood);
  };

  const handleGetRecommendations = () => {
    console.log("Getting recommendations for mood:", selectedMood);
  };

  return (
    <div className="MoodTrackerContainer">
      <h2>Mood Tracker</h2>
      <div className="MoodListContainer">
        {moods.map((mood, index) => (
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
    </div>
  );
};

export default MoodTracker;


