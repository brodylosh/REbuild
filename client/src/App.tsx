import { Route, Routes } from 'react-router';

import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
