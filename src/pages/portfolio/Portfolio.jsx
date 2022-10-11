
import './portfolio.css'

const Portfolio = () => {
  return (
      <div id="portfolioPage">
        <div id="portfolioBlurb">
          <div id="portfolioHeading">
            <div>Full Stack Applications</div>
          </div>
        </div>
        <div id="allProjects">
          <div className="projectContainer">
            <div className="projectContainerLeft">
              <div className="portfolioProjectTitle">
                <p>Communal Care</p>
              </div>
              <div id="projectDate">
                  <p>09.2022</p>
                </div>
              <div className="projectContainerLinks">
              <a href="https://github.com/y-sherap/communalcare_frontend" target="_blank" rel="noreferrer">GitHub ↝</a>
              <a href="https://communalcareapp.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo ↝</a>
              </div>
            </div>
            <div class="projectContainerRight">
                <div className="projectDescription">
                  <p>Built with the intention of fostering cooperation and solidarity, CommunalCare is a PERN stack application that allows members to freely share resources and services with their community. This non-transactional relationship is rooted in the practice of building new social relations that transcend mainstream social and economic paradigms.</p>
                </div>
                <div className="portfolioImage">
                  <img id="starredPic" src="https://i.imgur.com/Todg4w9.png" alt="starred"/>
                </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="projectContainerLeft">
              <div className="portfolioProjectTitle">
                <p>Starred</p>
              </div>
              <div id="projectDate">
                  <p>08.2022</p>
                </div>
              <div className="projectContainerLinks">
              <a href="https://github.com/y-sherap/Starred-React" target="_blank" rel="noreferrer">GitHub ↝</a>
              <a href="https://starred-react.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo ↝</a>
              </div>
            </div>
            <div class="projectContainerRight">
                <div className="projectDescription">
                  <p>Starred is a playlist curation PERN stack app built for users interested in discovering new music through a 3rd party API.</p>
                </div>
                <div className="portfolioImage">
                  <img id="starredPic" src="https://i.imgur.com/JGzqu3U.png" alt="starred"/>
                </div>
            </div>
          </div>
          <div className="projectContainer">
            <div className="projectContainerLeft">
              <div className="portfolioProjectTitle">
                <p>NYC Monkeypox Vaccination Sites</p>
              </div>
              <div id="projectDate">
                  <p>07.2022</p>
                </div>
              <div className="projectContainerLinks">
              <a href="https://github.com/y-sherap/NYC_Monkeypox_Vaccine_Sites" target="_blank" rel="noreferrer">GitHub ↝</a>
              <a href="https://boiling-beach-15847.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo ↝</a>
              </div>
            </div>
            <div class="projectContainerRight">
                <div className="projectDescription">
                  <p>A MERN stack app that serves as a repository for current Monkeypox vaccination sites in NYC.</p>
                </div>
                <div className="portfolioImage">
                  <img id="starredPic" src="https://i.imgur.com/Yt2rdVl.png" alt="starred"/>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Portfolio