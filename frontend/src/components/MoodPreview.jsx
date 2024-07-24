import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function MoodPreview() {
    const { loggedInUserData, navigate } = useContext(Context);

  return (
    <div className="bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5 my-5 relative">
        <h3 className="text-xl font-semibold mb-3">Mood Log</h3>
        {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
          loggedInUserData.moods.toReversed().slice(0, 5).map((entry) => {
            const date = new Date(entry.createdAt);
            const options = {
                weekday: 'short',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              };
            const formattedDate = date.toLocaleDateString("de-DE", options);
            return (
              <div key={entry._id} className="my-2 flex items-center justify-between">
                <div className="flex gap-5">
                  <p><span>{formattedDate}</span></p>
                  <h4 className="font-medium">{entry.type}</h4>
                </div>
              </div>
            );
          })
        ) : (
          <p>No moods logged yet.</p>
        )}
        <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => navigate("/mood-tracker")}>Show full log</button>
      </div>
  )
}

export default MoodPreview;