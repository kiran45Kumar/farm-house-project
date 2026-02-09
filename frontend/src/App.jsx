import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/title/Title";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallary/Gallery";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Title title={"About our place"} description={"Welcome to Our Place"}/>
      <Hero />
      <Title title={"Gallary"} description={"Discover the Experience"}/>
      <Gallery/>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
