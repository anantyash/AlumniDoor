import React from 'react'
import Signin from './Pages/Signin'
import SignUp from "./components/SignUp";
import LandingPage from './Pages/LandingPage';

import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <StyledEngineProvider injectFirst>

    <div>
      <LandingPage />
      
    </div>
    </StyledEngineProvider>
  )
}

export default App