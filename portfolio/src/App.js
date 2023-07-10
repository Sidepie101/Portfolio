import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CalculatorProject from './components/projects/CalculatorProject';
import DrinkManagerProject from './components/projects/DrinkManagerProject';
import Contact from './components/contact/Contact';
import AddTestimony from './components/testimonies/AddTestimony';
import TestimonyList from './components/testimonies/TestimonyList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/calculator" element={<CalculatorProject />} />
      <Route path="/projects/drink-manager" element={<DrinkManagerProject />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/add-edit-testimonies/:id?' element={<AddTestimony />} />
      {['/', '/testimonies'].map(path => <Route key={path} path={path} element={<TestimonyList />} />)}
    </Routes>
  );
};

export default App;
