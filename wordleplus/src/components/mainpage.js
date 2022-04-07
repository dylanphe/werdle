import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import SlidingPane from "react-sliding-pane";

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './theme/useDarkMode';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { Toggle } from './theme/toggle';
import './mainpage.css';

let mode="5";

// The function that toggles between themes
function Mainpage() {

  const navigate = useNavigate();

  const [playerName, setPlayerName] = useState("");

  const [show, setShow] = useState(false);
  const [showMode, setShowMode] = useState(false);

  const [openPanel, setOpenPanel] = useState(false);

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div /> 
  };

  function fourl() {
    mode = "4";
    setShowMode(true);
    
  }
  function fivel() {
    mode = "5"
    setShowMode(true);
  }
  function sixl() {
    mode = "6"
    setShowMode(true);
  }

  function handlePlay() {
    if(!playerName) {
      alert('Pleaser enter a name to play.');
      return;
    } else {
      navigate(mode);
    }
  }

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Modal className='inst-modal' size ="lg" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>HOW TO PLAY</Modal.Title>
            </Modal.Header>
            <Modal.Body class="modal-txt">
                <p >
                Guesses the WORDLE in six tries.
                <br/><br />
                Each Guess must be a valid word. Hit the enter button to submit.
                <br /><br />
                After each guess, the color of the tiles will change to show how close your guess was to the word.
                <br /> 
                </p> 
                <hr />
                <div>
                <button id="E-green"> E </button> 
                <p> The letter E is in the word and in the correct spot. </p>
                </div>
                <div>
                <button id="G-yellow" > G  </button>
                <p> The letter G is in the word but in the wrong spot. </p> 
                </div>
                <div>
                <button id="G-gray" > G </button>
                <p > The letter G is not in the word in any spot. </p> 
                </div>
                <hr />
                <p> A new WORDLE will be available for every gameplay! </p> 
            </Modal.Body>
        </Modal>

        <Modal className='inst-modal' size ="lg" show={showMode} onHide={() => setShowMode(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{mode}-Letters WORDLE</Modal.Title>
            </Modal.Header>
            <Modal.Body class="modal-txt">
                <p >
                Game Mode has been set. Enter your name and Click Play to begin the game.
                </p> 
            </Modal.Body>
        </Modal>
        
        <div className='nav-bar'>
          <div id='nav-left'>
            <button id = "hamburger-button" onClick={() => setOpenPanel(true)}> ☰ </button>
            <button id = "i-button" onClick={() => setShow(true)}> ⓘ </button>
          </div>
          <div id='nav-center'>
            {mode} Letters WORDLE
          </div>
          <div id='nav-right'>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div> 
        <div className='mainpage-display'>
          <SlidingPane 
            hideHeader={true}
            className = 'sidepanel'
            from="left"
            isOpen={openPanel} 
            width="250px" 
            onRequestClose={() => setOpenPanel(false)}>
            <div>
              <p id="panel-header">Game Modes</p>
              <button id="closebtn" onClick={() => setOpenPanel(false)}>&times;</button>
            </div>
            <hr />
            <div className="game-mode">
              <button id = "mode-button4" onClick={() => fourl()}>4 Letters WORDLE</button>
              <button id = "mode-button5" onClick={() => fivel()}>5 Letters WORDLE</button>
              <button id = "mode-button6" onClick={() => sixl()}>6 Letters WORDLE</button>
            </div>
          </SlidingPane>
          <span id='padding-top'>
            <button id="title" > W </button>
            <button id="title" > O </button>
            <button id="title" > R </button>
            <button id="title" > D </button>
            <button id="title" > L </button>
            <button id="title" > E </button>
          </span>
          <span id='padding-bottom'>
            <button id="title" > P </button>
            <button id="title" > L </button>
            <button id="title" > U </button>
            <button id="title" > S </button>
          </span>
          <form class = "name-box"> 
            <input type="text" name = "playername" value={playerName} onChange={(pname) => setPlayerName(pname.target.value)} placeholder="Enter Your Name Here!"/>
            <button id="play" type="submit" onClick={handlePlay}>PLAY</button>
          </form>
          <button id = "info-b" onClick={() => navigate('Infopage')}> || DEVELOPERS || </button>
        </div>
    </ThemeProvider>
  );
}

export default Mainpage;