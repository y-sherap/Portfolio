
import './portfolio.css'

const Portfolio = () => {
  return (
      <div id="portfolioPage">
        <div id="portfolioBlurb">
          <div id="portfolioHeading">
            <div>Full Stack Applications</div>
          </div>
            {/* <div id="selectedWork">
              <div id="selectedWorkTitle">
                <div>Selected Work</div>
              </div> */}
              {/* <div id="blurbProjects">
                <div>Communal Care</div>
                <div>MonkeyPox Vaccination Sites</div>
                <div>Starred</div>
                <div>Communal Care</div>
              </div> */}
            {/* </div> */}
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
              <a href="https://communalcare.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo ↝</a>
              </div>
            </div>
            <div class="projectContainerRight">
                <div className="projectDescription">
                  <p>Built with the intention of fostering cooperation and solidarity, CommunalCare is a PERN stack application that allows members to freely share resources and services with their community. This non-transactional relationship is rooted in the practice of building new social relations that transcend mainstream social and economic paradigms.</p>
                </div>
                <div className="portfolioImage">
                  {/* insert image here */}
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
              <a href="https://github.com/y-sherap/communalcare_frontend" target="_blank" rel="noreferrer">Live Demo ↝</a>
              </div>
            </div>
            <div class="projectContainerRight">
                <div className="projectDescription">
                  <p>Starred is a playlist curation PERN stack app built for users interested in discovering new music through a 3rd party API.</p>
                </div>
                <div className="portfolioImage">
                  {/* insert image here */}
                </div>
            </div>
          </div>

          <div className="projectContainer">
            <div className="projectContainerLeft">
              <div className="portfolioProjectTitle">
                <p>Monkeypox Vaccination Sites</p>
              </div>
              <div id="projectDate">
                  <p>07.2022</p>
                </div>
              <div className="projectContainerLinks">
              <a href="https://github.com/y-sherap/communalcare_frontend" target="_blank" rel="noreferrer">GitHub ↝</a>
              <a href="https://communalcare.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo ↝</a>
              </div>
            </div>
            <div class="projectContainerRight">
                <div className="projectDescription">
                  <p>A MERN stack app that serves as a repository for current Monkeypox vaccination sites in NYC.</p>
                </div>
                <div className="portfolioImage">
                  {/* insert image here */}
                </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Portfolio