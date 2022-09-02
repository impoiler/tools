import React from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Img2base64 from "./components/Img2base64";
import Whois from "./components/Whois";
import Domain from "./components/Domain";
import Html2Raw from "./components/Html2Raw";
import Urlshort from "./components/Urlshort";
import Ip from "./components/Ip";
import Crypto from "./components/Crypto";
import Viewport from "./components/Viewport";
import Tv from "./components/Tv";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/image2base64" element={<Img2base64 />} />
          <Route path="/whois" element={<Whois />} />
          <Route path="/url-short" element={<Urlshort />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/html2raw" element={<Html2Raw />} />
          <Route path="/ip" element={<Ip />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/Viewport" element={<Viewport />} />
          <Route path="/tv" element={<Tv />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
