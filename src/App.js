import React  from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <h1>hello</h1>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
