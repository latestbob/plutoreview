import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './AppRoute';
import { AuthContextProvider } from './context/auth';

function App() {
  return (
    <> 
        <Router>
            <AuthContextProvider>
               <AppRoute />
            </AuthContextProvider>
            
        </Router>
    </>
  );
}

export default App;
