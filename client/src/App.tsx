import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import styled from 'styled-components/macro'

import { Navbar } from './components/navigation'

import HomePage from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Navbar />
      <main id='main'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
