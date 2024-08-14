import React, { useState,useEffect } from 'react';
import logo from '../assets/Group 80.png';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const removeMenu = () => {
    if (screenWidth > 1500) return;
      setIsOpen(false);
  };

  return (
    <>
    <nav className="lg:flex fixed z-0 bg-white shadow-lg w-full h-[80px auto] z-50 overflow-x-hidden">
     <div className="flex lg:flex lg:mt-[20px] mb-[20px]">
       <div className="sm:h-auto sm:w-auto lg:h-auto lg:h-auto">
       <img src ={logo} className="ml-[20px] sm:pt-[25px] pt-[25px] lg:ml-[60px] lg:pt-[5px]" />
      </div>
      <div className="hidden sm:hidden absolute right-20  lg:flex gap-[20px]">
      <div className="list_items my-auto">
        <ul className="lg:flex lg:gap-[20px] justify-center">
          <li>Categories</li>
          <li>Reviews</li>
          <li>Offers</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="navbar_buttons flex gap-[20px]">
        <button className="bg-orange-500 text-white text-[19px] h-auto py-1.5 px-8 rounded my-auto">Write a Review</button>
        <button className="bg-transparent text-orange-500 border border-orange-500 h-auto py-1.5 px-8 rounded my-auto ">For Business</button>
      </div>
      </div>
      <div onClick={toggleMenu} className="nav_toggler absolute right-10 lg:hidden flex sm:flex mt-[25px] sm:mt-[25px] ml-[280px]">
      <button class="flex flex-col items-center justify-center w-8 h-8 space-y-1">
       <span class="block w-full h-0.5 bg-gray-800"></span>
       <span class="block w-full h-0.5 bg-gray-800"></span>
       <span class="block w-full h-0.5 bg-gray-800"></span>
      </button>
      </div>
      </div>
      {
        isOpen && (
  <div className="bg-[#000462] h-[800px] lg:hidden md:hidden">
    <div className="grid gap-[30px]">
      <div className="mt-[20px]">
      <div className="list_items text-white flex justify-center">
        <ul className="grid gap-[30px] justify-center items-center">
          <li>Categories</li>
          <li>Reviews</li>
          <li>Offers</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="navbar_buttons grid gap-[30px] mt-[30px] justify-center">
        <button className="bg-orange-500 text-white text-[19px] h-auto py-1.5 px-8 rounded my-auto">Write a Review</button>
        <button className="bg-transparent text-orange-500 border border-orange-500 h-auto py-1.5 px-8 rounded my-auto ">For Business</button>
      </div>
      </div>
      </div>
          </div>
        )
      }
    </nav>
    </>
  )

}
export default Navbar

