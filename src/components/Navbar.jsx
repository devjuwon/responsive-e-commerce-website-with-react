import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logop.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems =[
    {title: "jewelery & Aceesories", path: "/"},
    {title: "Clothing & Shoes", path: "/"},
    {title: "Home & Living", path: "/"},
    {title: "Wedding & Party", path: "/"},
    {title: "Toys & Entertainment", path: "/"},
    {title: "Art & Collectibles", path: "/"},
    {title: "Craft Supplies & Tools", path: "/"},
  ]
  
  
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
      <nav className=' bg-primaryBG flex justify-between items-center container md:py-4 pt-6 pb-3 '>
      <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block '/>
      <a href="/"><img src={logo} alt="" /></a>

      <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
        <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
        <a href="/" className='flex items-center gap-2'><FaShoppingBag/>Shopping</a>
      </div>

      {/* mobile nav bar */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu}>
          {
            isMenuOpen ? <FaTimes className='w-5 h-5 text-Black'/> : <FaBars className='w-5 h-5 text-Black'/>
          }
        </button>
      </div>
      </nav>

      <hr />
          {/* category items */}
      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-Black hidden'>
          {
            navItems.map(({title,path}) => (
              <li key={title} className='hover:text-purple-900 hover:font-bold'>
                <Link to="/"> {title} </Link>
              </li>
            ))
          }
        </ul>
      </div>

      {/* only mobile menu items */}
      
      <div className='pt-4'>
        <ul className={`bg-purple-100 text-Black px-4 py-2 rounded ${isMenuOpen ? "": "hidden"}`}>
          {
            navItems.map(({title,path}) => (
              <li key={title} className='hover:text-purple-500 my-3 cursor-pointer'>
                <Link to="/"> {title} </Link>
              </li>
            ))
          }
        </ul>
      </div>
      
    </header>
  )
}

export default Navbar
