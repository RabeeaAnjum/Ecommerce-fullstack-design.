import React from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Gridlist from '../Components/Gridlist';
import NewsLetter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const Gridview = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
     <Gridlist/>
     <NewsLetter/> 
     <Footer/>
    </div>
  )
}

export default Gridview;
