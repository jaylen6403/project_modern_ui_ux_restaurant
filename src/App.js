import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <>
      <Router>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
        <Routes>
          <Route path="/SpecialMenu" element={<SpecialMenu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  </div>
);

export default App;

