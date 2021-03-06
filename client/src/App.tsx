import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import { Navbar } from './components/navigation'
import { Footer } from './components/footer'

import HomePage from './pages/HomePage'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Navbar />
      <main id='main'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App