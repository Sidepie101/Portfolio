import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CalculatorProject from './components/projects/CalculatorProject';
import DrinkManagerProject from './components/projects/DrinkManagerProject';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <BrowserRouter basename="/">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/calculator" element={<CalculatorProject />} />
        <Route path="/projects/drink-manager" element={<DrinkManagerProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
