import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }

  .inst-modal .modal-content {
    background-color: ${({ theme }) => theme.body};
  }

  .sidepanel {
    background-color: ${({ theme }) => theme.body};
  }

  #nav-center {
    color: white;
  }

  .game-mode button{
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  #info-b {
    color: ${({ theme }) => theme.text};
  }

  #closebtn {
    color: ${({ theme }) => theme.text};
  }
  `