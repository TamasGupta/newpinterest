import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { NavLink, Route, Routes } from 'react-router-dom';
import Routing from '../utils/Routing';

function navbar() {
  return (
    <div className='mt-0'>
        <nav className=' w-full flex justify-between  px-8 bg-zinc-100 fixed top-0  py-5'>
           <div className='h-10 w-10 rounded-full'> 
           <img className='object-center position-cover' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
            </div>
            <NavLink to="/" style={(e) =>{return{backgroundColor:e.isActive?"black":"",color:e.isActive?"white":"" }}} className='bg-zinc-100 rounded-full px-4 py-2 ' >Home</NavLink>
            <NavLink to="/explore" style={(e) =>{return{backgroundColor:e.isActive?"black":"",color:e.isActive?"white":"" }}} className='bg-zinc-100 rounded-full px-4 py-2 ' >Explore</NavLink>
            <NavLink to="/create" style={(e) =>{return{backgroundColor:e.isActive?"black":"",color:e.isActive?"white":"" }}} className='bg-zinc-100 rounded-full px-4 py-2 ' >Create</NavLink>
           <input type="search" placeholder="Search" className='bg-zinc-200  rounded-full px-4 w-[65%] ' />



           <button className='text-4xl text-zinc-500 '>
           <IoIosNotifications />
           </button>
           <button className='text-3xl text-zinc-500 '>
           <IoChatbubbleEllipsesSharp />
           </button>
           <button className='w-10  h-10 rounded-full overflow-hidden'>
            <img className='object-cover' src="https://i.pinimg.com/564x/2d/f7/c7/2df7c7297fabc1d141b66ec2f8c6b785.jpg" alt="" />
           </button>
           <button className='text-4xl text-zinc-500'>
        
           <IoMdArrowDropdown />
           </button>
        </nav>

      <Routing/>

    </div>
  )
}

export default navbar