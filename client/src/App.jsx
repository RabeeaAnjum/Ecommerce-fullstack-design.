import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from "./Pages/Cart";
import Listing from "./Pages/Listing";
import Details from "./Pages/Details";
import Gridview from "./Pages/Gridview";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gridview" element={<Gridview />} />
          <Route path="details" element={<Details />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Listing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
