import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { Navbar } from './components/navigation'
import HomePage from './pages/home'
import styled from 'styled-components/macro'

const MainContainer = styled.main`
  
`

function App() {

  return (
    <MainContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </MainContainer>
  )
}

export default App
