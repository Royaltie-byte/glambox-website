import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import WigShowcase from './components/sections/WigShowcase'
import Services from './components/sections/Services'
import Booking from './components/sections/Booking'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WigShowcase />
        <Services />
        <Booking />
      </main>
    </>
  )
}

export default App