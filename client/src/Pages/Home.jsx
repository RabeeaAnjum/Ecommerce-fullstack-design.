import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Deals from '../Components/Deals';
import HomeOutdoor from '../Components/HomeOutdoor';
import Consumer from '../Components/Consumer';
import Quoteform from '../Components/Quoteform';
import Recommended from '../Components/Recommended';
import Extra from '../Components/Extra';
import Suppliers from '../Components/Suppliers';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Deals/>
<HomeOutdoor/>
<Consumer/>
<Quoteform/>
<Recommended/>
<Extra/>
<Suppliers/>
<Newsletter/>
<Footer/>
    </>
  )
}

export default Home
