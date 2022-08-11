import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Use React DOM method to render jsx files to page
ReactDOM.render(
  <React.StrictMode>
    {/* Get our App component */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
