import React, { useState } from 'react';


import Logo from './components/assets/Frontend_Assets/logo.png';
import cart from './components/assets/Frontend_Assets/cart_icon.png';
import { Link, Links } from 'react-router-dom';

export default function Navbar() {

  const [menu,setMenu] =useState("shop");
  return (
    <div className="flex justify-between p-[16px]  items-center">
      <div className="navlogo flex  justify-evenly   items-center text-[22px] w-1/3 ">
        <img src={Logo} alt="" className='w-11' />
        <p className=' ml-[-75px] text-[32px]'> sollamata</p>
      </div>
      <ul className="flex gap-32  w-1/2">
        <li onClick={()=>{setMenu("shop")}} className=' text-[20px]  cursor-pointer'><Link to='/'>Shop</Link> {menu==="shop"?<hr className='w-[35px] bg-red-900 h-1  border-none rounded-2xl' />:<></>} </li>
        <li onClick={()=>{setMenu("mens")}} className=' text-[20px] cursor-pointer'><Link to='/mens'>Men</Link>{menu==="mens"?<hr className='w-[35px] bg-red-900 h-1 mt-2 border-none rounded-2xl' />:<></>}</li>
        <li onClick={()=>{setMenu("women")}} className='text-[20px]  cursor-pointer'><Link to='/women'>Women</Link>{menu==="women"?<hr className='w-[35px] bg-red-900 h-1 mt-2 border-none rounded-2xl' />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}} className='text-[20px]  cursor-pointer'><Link to='/kids'>Kids</Link>{menu==="kids"?<hr className='w-[35px] bg-red-900 h-1 mt-2 border-none rounded-2xl' />:<></>}</li>

      </ul>
      <div className="cart justify-items-center flex justify-evenly  w-1/3">
       
        
        <Link to='/login'> <button className='bg-transparent tex-[15px] px-6 py-2 border border-gray-600 active:bg-[#f5f2f1] rounded-3xl'>Login</button></Link>
      <Link to='/cart'><img src={cart} alt="" className='w-9 h-9' /></Link>  
        <p className='flex items-center justify-center w-[18px] h-[18px] mt-[-7px] ml-[-105px] bg-red-600 text-white rounded-[11px]'>0</p>
      </div>
    </div>
  )
}
