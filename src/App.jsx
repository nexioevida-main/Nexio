import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
