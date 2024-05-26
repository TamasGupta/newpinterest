import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function userdet() {
   const name= useParams();
   const navigate= useNavigate();
  return (
 <>
    <div className='mt-20 flex  justify-center bg-sky-200'>
      {name.name}
      
        </div>
        <button onClick={()=>navigate(-1) } className='px-3 py-2 bg-red-200 rounded-md mt-10 left-1/2 absolute '>Go Back</button>
        
        </> )
}

export default userdet