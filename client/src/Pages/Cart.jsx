import React from 'react'
import Header from '../Components/Header';
import Mycart  from '../Components/Mycart';
import Features from '../Components/Features';
import SavedForLater from '../Components/Save';
import DiscountBanner from '../Components/Discountbanner';
import Footer from '../Components/Footer';
const Cart = () => {
  return (
    <div>
      <Header/>
     <Mycart/>
     <Features/>
     <SavedForLater/>
     <div className='bg-gray-100 '>
      <div className='bg-gray-100 ml-23 mr-27'>
     <DiscountBanner/>
     </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Cart
