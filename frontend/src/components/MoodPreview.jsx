// import { useContext } from 'react';
// import { Context } from '../context/Context.jsx';

// function MoodPreview() {
//     const { loggedInUserData, navigate } = useContext(Context);

//   return (
//     <div className="bg-white/10 rounded-lg backdrop-blur-md shadow-lg p-5 my-5 relative">
//         <h3 className="text-xl font-semibold mb-3">Mood Log</h3>
//         {loggedInUserData && loggedInUserData.moods && loggedInUserData.moods.length > 0 ? (
//           loggedInUserData.moods.toReversed().slice(0, 5).map((entry) => {
//             const date = new Date(entry.createdAt);
//             const options = {
//                 weekday: 'short',
//                 year: 'numeric',
//                 month: 'numeric',
//                 day: 'numeric',
//               };
//             const formattedDate = date.toLocaleDateString("de-DE", options);
//             return (
//               <div key={entry._id} className="my-2 flex items-center justify-between">
//                 <div className="flex gap-5">
//                   <p><span>{formattedDate}</span></p>
//                   <h4 className="font-medium">{entry.type}</h4>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p>No moods logged yet.</p>
//         )}
//         <button className="bg-white/30 border-none rounded py-2 px-5 m-1 cursor-pointer transition-all duration-300 hover:bg-gray-400" onClick={() => navigate("/mood-tracker")}>Show full log</button>
//       </div>
//   )
// }

// export default MoodPreview;

// * New Styling:

import { useContext } from 'react';
import { Context } from '../context/Context.jsx';

function MoodPreview() {
  const { loggedInUserData, navigate } = useContext(Context);

  return (
    <div className="w-full bg-darkGreenForBG rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        <h3 className="text-4xl font-bold text-white mb-8 text-center">Mood Log</h3>
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
              <div key={entry._id} className="my-2 flex items-center justify-between text-white bg-darkGreenForBG p-3 rounded-lg shadow-md backdrop-blur-md border-double border-4 border-yellowishGreenForTextandButtons">
                <div className="flex items-center gap-3">
                  <p className="text-sm">{formattedDate}</p>
                  <h4 className="font-medium text-lg">{entry.type}</h4>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white">No moods logged yet.</p>
        )}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-yellowishGreenForTextandButtons text-darkGreenForBG rounded-full px-8 py-3 hover:bg-white transition duration-300" onClick={() => navigate("/mood-tracker")}>Show full log</button>
        </div>
      </div>
    </div>
  );
}

export default MoodPreview;