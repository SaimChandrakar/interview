import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Mans from './components/Mans';
import Women from './components/Women';
import Navigationbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Navigationbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />,
        <Route exact path="/auth/login" element={<Login/>} />,
        <Route path="/mans" element={<Mans/>} />,
        <Route path="/womens" element={<Women/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
