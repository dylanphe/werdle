// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/theme/useDarkMode';
import { lightTheme, darkTheme } from './components/theme/theme';
import { GlobalStyles } from './components/theme/global';

import 'bootstrap/dist/css/bootstrap.min.css';  
import "react-sliding-pane/dist/react-sliding-pane.css";
import Mainpage from './components/mainpage';
import Infopage from './components/infopage';
import Gamepage4 from './components/gamepage/gamepage-4';
import Gamepage5 from './components/gamepage/gamepage-5';
import Gamepage6 from './components/gamepage/gamepage-6';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

// The function that toggles between themes
function App() {
  
  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Mainpage />} />
          <Route path = "4" element={<Gamepage4 />} />
          <Route path = "5" element={<Gamepage5 />} />
          <Route path = "6" element={<Gamepage6 />} />
          <Route path = "Infopage" element={<Infopage />} />
        </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;