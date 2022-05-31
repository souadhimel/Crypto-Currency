import React  from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from './components/Footer/Footer';
import CoinDetails from './components/CoinDetails/CoinDetails';
import UScontact from './components/Contact/UScontact';
import BDcontact from './components/Contact/BDcontact';


function App() {
  return (
    <div>
      
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/usContact" element={<UScontact></UScontact>}></Route>
        <Route path="/bdContact" element={<BDcontact></BDcontact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
