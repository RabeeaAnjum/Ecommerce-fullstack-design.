import React from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import Description from '../Components/Description';
import RelatedProducts from '../Components/Related';
import DiscountBanner from '../Components/Discountbanner';
import Footer from '../Components/Footer';
const Details = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
     <ProductCard/>
     <Description/>
     <RelatedProducts/>
     <DiscountBanner/>
     <Footer/>
    </div>
  )
}

export default Details
