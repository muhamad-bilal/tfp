import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DynastySection from './components/cards'
import HeritageSections from './components/Heritage'
import HistoricalSites from './components/Sites'
import Footer from './components/Footer'


function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <DynastySection />
      <HeritageSections />
      <HistoricalSites />
      {/* <Footer /> */}
    </div>
  )
}

export default App
