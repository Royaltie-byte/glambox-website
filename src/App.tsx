import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SocialFab from './components/ui/SocialFab'

import Home from './pages/Home'
import WigsPage from './pages/WigsPage'
import ScentsPage from './pages/ScentsPage'
import LashesPage from './pages/LashesPage'
import BraidingPage from './pages/BraidingPage'
import ManicurePage from './pages/ManicurePage'
import MakeupPage from './pages/MakeupPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wigs" element={<WigsPage />} />
          <Route path="/scents" element={<ScentsPage />} />
          <Route path="/lashes" element={<LashesPage />} />
          <Route path="/braiding" element={<BraidingPage />} />
          <Route path="/manicure" element={<ManicurePage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
      <SocialFab />
    </BrowserRouter>
  )
}

export default App