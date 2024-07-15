import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import Newsletters from './Newsletters'
import Footer from './Footer'


const Home = () => {
  return (
    
    <>
    
    <div>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newsletters />
      <Footer/>
    </div>
    </>
  )
}

export default Home
