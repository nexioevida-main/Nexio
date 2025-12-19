import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
import { useLocation } from "react-router-dom";


const App = () => {

  const location = useLocation();

  const hideNavbar = location.pathname === "/profile";

  return (

    <>
 {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> 

      <Footer />
    </>
  )
}

export default App