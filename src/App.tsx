import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import WigShowcase from './components/sections/WigShowcase'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import FindUs from './components/sections/FindUs'
import Booking from './components/sections/Booking'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsappFloat'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WigShowcase />
        <Services />
        <Gallery />
        <FindUs />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat/>
      
    </>
  )
}

export default App