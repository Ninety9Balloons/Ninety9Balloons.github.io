import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Editing from './pages/Editing'
import VFX from './pages/VFX'
import MotionGFX from './pages/MotionGFX'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div
      className="min-h-screen text-[rgb(40,15,15)]"
      style={{ background: 'radial-gradient(circle, rgba(232,232,232,1) 0%, rgb(219,180,180) 100%)' }}
    >
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/vfx" element={<VFX />} />
          <Route path="/motion-gfx" element={<MotionGFX />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
