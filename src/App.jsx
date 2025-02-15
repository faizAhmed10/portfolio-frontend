import './css/App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar.jsx';
import {AuthProvider} from './utils/AuthContext'
import React from 'react';

function App() {

  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
      <AnimatedRoutes/>
      </AuthProvider>
    </div>
  );
}

export default App;
