import React, { useContext, useEffect } from 'react';
import './MoodTracker.css';
import { Context } from '../../context/Context.jsx';

const MoodTracker = () => {
  const {
    selectedMood, recommendations, edit, setEdit,
    handleLogMood, handleDeleteMood, handleMoodSelect, handleReplaceMood,
    handleGetRecommendations, loggedInUserData
  } = useContext(Context);

  

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
        {(!edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
          <button className="ActionButton" onClick={() => setEdit(!edit)}>Edit Log</button>
        )}
        {(edit && loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0) && (
          <button className="ActionButton" onClick={() => setEdit(!edit)}>End Edit</button>
        )}
        <button className="ActionButton" onClick={handleGetRecommendations}>Get Recommendations</button>
      </div>

      <div className="MoodLogContainer">
        <h3>Mood Log</h3>
        {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
          loggedInUserData.moods.map((entry) => {
            const date = new Date(entry.createdAt);
            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString();
            return (
              <div key={entry._id} className="LogEntry">
                <p><span>{formattedDate} at {formattedTime}</span></p>
                <h4>{entry.type}</h4>
                {edit && (
                  <>
                    <button onClick={() => handleDeleteMood(entry._id)} className='editBtn'>Delete</button>
                    <button onClick={() => handleReplaceMood(entry._id)} className='editBtn'>Replace</button>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <p>No moods logged yet.</p>
        )}
      </div>

      <h3>Recommendations</h3>

      {/* <div className="RecommendationsContainer">
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
      </div> */}
    </div>
  );
};

export default MoodTracker;
