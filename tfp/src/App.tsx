import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UpcomingEvents from './components/Upcomingevents'
import ContentSections from './components/History'
import ContactMembership from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <ContentSections />
      <ContactMembership />
      <Footer />
    </div>
  )
}

export default App
