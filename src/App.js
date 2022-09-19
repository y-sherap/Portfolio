import './styles/App.css'
import { Route, Routes } from 'react-router'
import Nav from './components/nav/Nav'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/Projects'
import MonkeyPox from './pages/monkeypox/MonkeyPox'
import StarredPlaylist from './pages/starredplaylist/StarredPlaylist'
import ConnectFour from './pages/connectfour/ConnectFour'
import CommunalCare from './pages/communalcare/CommunalCare'


const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/info' element={ <About /> } /> 
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/communal-care' element={ <CommunalCare /> } />
          <Route path='/monkeypox_vaccination_sites' element={ <MonkeyPox />} />
          <Route path='/starred' element={ <StarredPlaylist />} />
          <Route path='/connectfour' element={ <ConnectFour />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
