// LoadingScreen.js
import React from 'react';
import '../styles/loadingScreen.css'; // Import the CSS file

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      {/* Use the custom animation class */}
      <div className="loading-text" style={{ animation: 'spin 1s linear infinite' }}>
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
