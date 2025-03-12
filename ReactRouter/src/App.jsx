import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Red from './Components/Red'
import Blue from './Components/Blue'
import Home from './Components/Home'

function App() {
  return (
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/">home</Link>
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
