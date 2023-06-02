import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Team from './components/Team'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'
import Faq from './components/Faq'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<>
            <Hero/>
            <Services/>
            <Feature/>
            <Faq/>
            <Work/>
            <Team/>

          </> }/>
        </Routes>
        
      </Router>
      <Footer/>
    </>
  )
}

export default App
