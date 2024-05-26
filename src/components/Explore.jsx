import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Explore() {
  return (
    <div  >

    <div className='mt-20 flex justify-center'>
      Explore
    </div>
       <div className='flex flex-col gap-5 items-center mt-10 justify-center'>
       <Link className='p-3  bg-orange-200 rounded-full' to="/explore/Tamas">Tamas</Link>
        <Link className='p-3 bg-orange-200 rounded-full'  to="/explore/Akash">Akaash</Link>
        <Link className='p-3 bg-orange-200 rounded-full'  to="/explore/Aman">Aman</Link>
       </div>
       
       <Outlet></Outlet>
        </div>
  )
}

export default Explore