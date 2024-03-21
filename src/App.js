import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Reservation } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><AboutUs /><SpecialMenu /><Chef /><Intro /><Laurels /><Gallery /><FindUs /><Footer /></>} />
          <Route path="/menu" element={<><SpecialMenu /></>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </Router>
    </>
  </div>
);

export default App;

