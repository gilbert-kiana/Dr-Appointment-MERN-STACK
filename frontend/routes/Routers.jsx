import React from 'react'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Services from '../src/pages/Services'
import Signup from '../src/pages/Signup'
import Contact from '../src/pages/Contact'
import DoctorDetails from '../src/pages/Doctors/DoctorDetails'
import Doctors from '../src/pages/Doctors/Doctors'

import { Routes, Route } from 'react-router-dom'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
    </Routes>
}

export default Routers