import {Link} from 'react-router-dom'
import './nav.css'

const Nav = () => {
  
  return (
    <div id="navbar">
      <header>
        <div id="navContainer">
          <Link to = '/' id="homeTitle">YANGTSEL SHERAP</Link>
          <Link to = '/info' id="aboutTitle">ABOUT</Link>
          <p id="navBarProjectTitle">PROJECTS</p>
          <div id="projects">
          <div id="communalcare">
              <Link to = '/communal-care' >> COMMUNAL CARE</Link>
            </div>
            <div id="connectfourTitle">
              <Link to = '/connectfour'>> CONNECT FOUR</Link> 
            </div>
            <div id="monkeypoxTitle">
              <Link to = '/monkeypox_vaccination_sites' >> MONKEYPOX VACCINATION SITES</Link>
            </div>
            <div id="starredTitle">
              <Link to = '/starred'>> STARRED</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav