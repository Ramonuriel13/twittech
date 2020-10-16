import React from 'react';
import Routes from './routes';import { Normalize } from 'styled-normalize';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <>
    <Normalize />
    <GlobalStyles />
    <Routes/>
    </>
  );
}

export default App;