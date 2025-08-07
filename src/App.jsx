import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import { useContext } from 'react';
//import UserContext from './UserContext';

//pages
import Home from "./pages/home.jsx";
import Order from "./pages/order.jsx";
import About from "./pages/about.jsx";
import Login from "./pages/login.jsx";

// components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    	<Footer/>
    </>
  );
}

export default App;
