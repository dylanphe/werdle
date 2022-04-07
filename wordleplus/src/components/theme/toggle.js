import React from 'react'
import { func, string } from 'prop-types';
import '../mainpage.css';

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <button id='theme-button' onClick={toggleTheme} >
        {theme === 'light' ? "🌙" : "🔆" }
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

