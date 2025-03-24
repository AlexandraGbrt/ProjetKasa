import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Rental from '../pages/Rental';
import Error from '../pages/Error';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="*" element={<Error />} /> {/* Pour les routes non trouvées */}
      </Routes>
    </Router>
  );
}

export default AppRouter;