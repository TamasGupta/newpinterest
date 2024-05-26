import React from 'react'
import Home from '../components/Home'
import Explore from '../components/Explore'
import Create from '../components/Create'
import Userdet from '../components/userdet'
import { Route,Routes } from 'react-router-dom'
function Routing() {
  return (
    <div>
         <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />}>

        <Route path='/explore/:name' element={<Userdet />} > </Route>
        </Route>
        <Route path='/create' element={<Create />} />
        
       </Routes>
    </div>
  )
}

export default Routing