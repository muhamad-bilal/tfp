import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TeamProfiles from './components/Team'
import ContentSections from './components/MissionVision'
import Projects from './components/Projects'
import Testimonial from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <TeamProfiles />
      <ContentSections />
      <Projects />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  )
}

export default App
