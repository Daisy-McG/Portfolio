import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { Navbar } from './components/navigation'
import HomePage from './pages/home'
import styled from 'styled-components/macro'

const MainContainer = styled.main`
  
`

function App() {

  return (
    <Router>
      <Navbar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainContainer>
    </Router>
  )
}

export default App
