import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/service'
import Portfolio from './pages/portfolio'
import Gallery from './pages/gallery'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/gallery" element={<Gallery />} />

    </Routes>
  )
}

export default App
