import './styles/App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages//portfolio/Portfolio'
import Resume from './pages/resume/Resume'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <About /> } /> 
          <Route path='/portfolio' element={ <Portfolio /> } />    
          <Route path='/resume' element={ <Resume /> } />    
        </Routes>
      </main>
    </div>
  )
}



export default App
