import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import de Router
import Navbar from './Navbar';  // Si tu veux avoir une barre de navigation
import RouterComponent from './pages/Router';  // Import du composant Router

function App() {
  return (
    <Router>
      <Navbar /> {/* Ajoute la barre de navigation */}
      <RouterComponent /> {/* Le composant qui gère les routes */}
    </Router>
  );
}

export default App;
