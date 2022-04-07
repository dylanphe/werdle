import React from 'react';
import './infopage.css';
import { useNavigate } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './theme/useDarkMode';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { Toggle } from './theme/toggle';

function Infopage() {
  //Instantiate useNavigate for routing
  const navigate = useNavigate();
  //Instantiate theme and themeMode for theme
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />
  };
  
  
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
      <div>
        <div className='nav-bar'>
          <div id='nav-left'>
            <button id = "hamburger-button" onClick={() => navigate('/')}> ⮌ </button>
          </div>
          <div id='nav-center'>
            UCLA PROJECT
          </div>
          <div id='nav-right'>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        <div id = "info">
          <span id ="block_display">
              <button id="title1"> W </button>
              <button id="title1" > O </button>
              <button id="title1" > R </button>
              <button id="title1" > D </button>
              <button id="title1" > L </button>
              <button id="title1" > E </button>
          </span>
          <span id ="block_display">
              <button id="fake" > P </button>
              <button id="fake" > L </button>
              <button id="fake" > U </button>
              <button id="fake" > S </button>
          </span>
        </div>
        <div className= "display_inline">
          <p id = "text box">
            Chandaralong Phe <br/>
            "C" <br/>
            (dylanphe@g.ucla.edu)
          </p>
          <p id = "text box">
            Lorn Hin Adrian Lam <br/>
            "A" <br/>
            (adrianlam@g.ucla.edu)
          </p>
          <p id = "text box">
            Nicholas Hamakami <br/>
            "N" <br/>
            (nhamakami@g.ucla.edu)
          </p>
          <p id = "text box">
            Nathaniel Webster  <br/>
            "N" <br/>
            (natewebsterm@g.ucla.edu)
          </p>
          <p id = "text box">
            Trung Vu <br/>
            "T" <br/>
            (trungvu08@g.ucla.edu)
          </p>
        </div>
      </div>
      </>
    </ThemeProvider>
  )
}

export default Infopage;