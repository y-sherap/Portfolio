import {Link} from 'react-router-dom'
import './nav.css'

const Nav = () => {
  
  return (
    <header>
      <div id="navbar">
        <div>
          <Link to = '/' id="aboutTitle">info</Link>
        </div>
        <div>
          <Link to = '/portfolio' id="portfolioTitle">portfolio</Link>
          <Link to = '/resume' id="resumeTitle">resume</Link>
        </div>
      </div>
    </header>
  )
}

export default Nav