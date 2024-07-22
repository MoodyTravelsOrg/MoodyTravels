// import React from 'react';
// import './PageNotFound.css'; // Asegúrate de importar el archivo CSS // ! Really? HAHA :)

// function PageNotFound() {
//   return (
//     <div className="page-not-found">
//       <h1>404</h1>
//       <p>Page Not Found :(</p>
//       <a href="/">Go to Homepage</a>
//     </div>
//   );
// }

// export default PageNotFound;

// ! Here's the same component using Tailwind CSS classes:

import React from 'react';

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen mx-auto bg-gray-600/70 rounded-lg shadow-lg backdrop-blur-md border border-white/30">
      <h1 className="text-5xl mb-4 text-white">404</h1>
      <p className="text-2xl mb-8 text-white">Page Not Found :(</p>
      <a 
        href="/" 
        className="text-lg text-white border border-white py-2 px-4 rounded transition duration-300 hover:bg-black hover:text-white"
      >
        Go to Homepage
      </a>
    </div>
  );
}

export default PageNotFound;