'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import ThemeToggle from './Thim';
import { TbLetterE, TbLetterH, TbLetterO, TbLetterP, TbLetterR, TbLetterS } from 'react-icons/tb';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  //const cartCount = useSelector(state => state.cart)
  const cartCount = useSelector((state) => state.cart)
  //console.log(cartCount)
 

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header
    className={`${
      isActive ? ' py-4  shadow-md' : ' py-6'
    } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <div className="flex flex-shrink-0 items-center">
            {/* <Image src={logo} alt="Logo" /> */}
            <TbLetterS className="w-8 h-1/5" />
            <TbLetterH className="w-8 h-1/5" />
            <TbLetterO className="w-8 h-1/5" />
            <TbLetterP className="w-8 h-1/5" />
            <TbLetterP className="w-8 h-1/5" />
            <TbLetterE className="w-8 h-1/5" />
            <TbLetterR className="w-8 h-1/5" />
          </div>
        </Link>
         
        {/* Cart */}
        <div className='flex items-center gap-3 '>
        <ThemeToggle/>
          <h1 className='text-lg underline cursor-pointer'>Sign In</h1>
        <div className="cursor-pointer flex relative">
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {cartCount.cartItems.length}
          </div>
        </div>
        
        </div>
      </div>
    </header>
  );
};

export default Navbar;
