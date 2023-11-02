import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className={` dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      <label className="toggle-label">
       {darkMode?"Switch to Light": "Switch to Dark"}
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="toggle-input" />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
