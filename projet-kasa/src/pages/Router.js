import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import des pages
import Home from './Home';
import About from './About';
import Rental from './Rental';
import Error from './Error';

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="*" element={<Error />} /> {/* Route pour gérer les erreurs */}
      </Routes>
    </div>
  );
}

export default Router;
