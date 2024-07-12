import React from 'react';
import './PageNotFound.css'; // Asegúrate de importar el archivo CSS

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Page Not Found :(</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
}

export default PageNotFound;
