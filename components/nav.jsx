"use client";
import React from 'react'
import logo from '/public/react.svg';


const Nav = () => {
  return (
    <nav className=' w-[100vw] h-[70px] flex justify-center items-center ' > 
      <div className='w-[80vw] h-[35px]  flex justify-between items-center ' >
       <img src={logo} alt="" />
       <div className=" flex gap-4 "> 
         <a href="#" className=' font-bold hover:text-red-400 duration-300' >Home</a>
         <a href="#" className=' font-bold hover:text-red-400 duration-300' >About</a>
         <a href="#" className=' font-bold hover:text-red-400 duration-300' >Services</a>
         <a href="#" className=' font-bold text-red-400 hover:text-black duration-300 ' >Contact</a>
        </div> 
        <div className="btns">
            <button className=" hover:text-black hover:bg-transparent hover:border hover:border-black  text-white bg-red-400 py-2 px-4 font-bold rounded-sm ">GitHub</button>
        </div>
     </div>
    </nav>
  )
}

export default Nav
