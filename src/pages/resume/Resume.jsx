import './resume.css'
import ysherap_resume from './YSherap_Resume.pdf'

const Resume = () => {

  return (
    <div id="resumePage">
      <div id="resumeHeader">
        <div id="headerNameDetail">
          <div id="resumeName">
            Yangtsel Sherap
          </div>
          <div id="resumeHeaderDetails">
            Front-End Developer in Brooklyn, NY
          </div>
        </div>
        <div>
          <a href={ysherap_resume}
              className='btn'
              download
              rel='noopener noreferrer'
              target='_blank'
          
          
          >Download CV</a>
        </div>
  
      </div>
      <div id="skillsContainer">
        <div className="containerTitle">
          SKILLS
        </div>
        <div className="skillsSubCategoryContainer">
          <div className="skillsSubCategoryKey">Programming Languages:        
          </div>
          <div className="skillsSubCategoryValue">Javascript, CSS, HTML5, Python, Django, Vue</div>
        </div>
        <div className="skillsSubCategoryContainer">
          <div className="skillsSubCategoryKey">Libraries and Frameworks:         
          </div>
          <div className="skillsSubCategoryValue">React.js, Node.js, Express, Mongoose</div>
        </div>
        <div className="skillsSubCategoryContainer">
          <div className="skillsSubCategoryKey">Databases:         
          </div>
          <div className="skillsSubCategoryValue">MongoDB, PostGreSQL</div>
        </div>
        <div className="skillsSubCategoryContainer">
          <div className="skillsSubCategoryKey">Product Management:         
          </div>
          <div className="skillsSubCategoryValue">Backlog Prioritization, Agile/Scrum methodologies, QA Testing</div>
        </div>
        <div className="skillsSubCategoryContainer">
          <div className="skillsSubCategoryKey">Tools:         
          </div>
          <div className="skillsSubCategoryValue">GitHub, Git, VSCode, Heroku, Vercel, Jira, Trello, Confluence, Miro, Pendo, Notion </div>
        </div>
      </div>
      <div id="experienceContainer">
        <div className="experience">
          <div className="containerTitle">WORK EXPERIENCE
          </div>
          <div className="experienceSection">
            <div className="experienceDetails">
              <div className="experienceTitle">Software Engineer Fellow, General Assembly</div>
              <div className="experienceDate">06.2022 - 09.2022</div>
              <div id="goToProjects">
                <a href="https://ysherap-portfolio.vercel.app/portfolio" target="_blank" rel="noreferrer">View Projects↝</a>

              </div>
              {/* <div id="gaExperienceDescription">
                Completed 12-week Software Engineering Immersive course in full-stack development managing project work and implementing UX/UI design thinking to build applications.
              </div> */}
                <div className="experienceDescription">
                  <div>-Completed 12-week Software Engineering Immersive course in full-stack development managing project work and implementing UX/UI design thinking to build applications
</div>
                  <div>- Identified opportunities to integrate UX results to design front-end applications in Miro and work through redundancies across apps </div>
                  {/* <div>- Identified opportunities to integrate UX results to design front-end applications and work through redundancies across apps</div> */}
                  <div>- Prioritized and managed project tasks in Trello</div>
                </div>
                {/* <div className="projectDescriptionContainer">
                  <div className="projectDescriptionText">
                    CommunalCare: Built with the intention of fostering cooperation and solidarity, CommunalCare is a PERN stack application that allows members to freely share resources and services with their community.
                  </div>
                <div className="projectBullets">
                  <div>- Identified opportunity to integrate UX results to design front end application and work through redundancies across app</div>
                  <div>- Used JWT authorization to allow users to create accounts </div>
                  <div>- Leveraged Trello to prioritize and manage project tasks</div>
                </div>
              </div>
              <div className="projectDescriptionContainer">
                  <div className="projectDescriptionText">
                    Starred - Starred is a playlist curation PERN stack app built for users interested in discovering new music 
                  </div>
                <div className="projectBullets">
                  <div>- Placeholder</div>
                  <div>- Placeholder</div>
                  <div>- Placeholder</div>
                  <div>- Placeholder</div>
                </div>
              </div>
              <div className="projectDescriptionContainer">
                  <div className="projectDescriptionText">
                    NYC Monkeypox Vaccination Sites - A MERN stack app that serves as a repository for current Monkeypox vaccination sites in NYC                  </div>
                <div className="projectBullets">
                  <div>• Placeholder</div>
                  <div>• Placeholder</div>
                  <div>• Placeholder</div>
                  <div>• Placeholder</div>
                </div>
              </div> */}
            </div>
          
          <div className="experienceDetails">
            <div className="experienceTitle">Associate Product Manager, Axios</div>
              <div className="experienceDate">02.2022 - 03.2022</div>
              <div className="experienceDescription">
                - Created and  maintained product backlogs and led weekly grooming and sprint planning sessions with 3 data analysts and 5 engineers. Left the position to pivot into a more technical role.
              </div>
            </div>

          <div className="experienceDetails">
            <div className="experienceTitle">Product Owner, CipherHealth</div>
              <div className="experienceDate">12.2020 - 10.2021</div>
              <div className="experienceDescription">
                <div>- Spearheaded company’s first initiative to capture consumer data to drive product strategy</div>
                <div>- Designed 15 customer facing mockups for new product enhancements and solutions in Miro</div>
                <div>- Created functional and technical requirements in Jira, prioritized product backlog, and led bi-weekly refinement and sprint planning sessions with the engineering team</div>
                <div>- Documented 50+ Release Notes in Confluence for internal stakeholders and created in-app user guides in Pendo for external customers</div>
                <div>- Oversaw escaped bug resolution process</div>
              </div>
            </div>
            <div className="experienceDetails">
              <div className="experienceTitle">Product Specialist, CipherHealth</div>
                <div className="experienceDate">09.2019 - 12.2020</div>
                <div className="experienceDescription">
                <div>- Created standardized documentation on Confluence with key metrics to improve Customer Success team’s understanding of CipherInsights reports inventory </div>
                <div>- Tagged 100+ vue.js pages on Pendo to track customer utilization of Cipher’s solutions</div>
                <div>- Onboarded 6 product specialists; trained them on use-cases for the multiple reports company offers to customers</div>
              </div>
            </div>
            <div className="experienceDetails">
            <div className="experienceTitle">Project Coordinator, Upper West Strategies</div>
              <div className="experienceDate">02.2018 - 08.2019</div>
              <div className="experienceDescription">
                <div>- Served as a liaison between stakeholders (life sciences companies, students, and universities) for the LifeSci NYC Internship Program </div>
                <div>- Created surveys through Survey Monkey and Google form to drive strategy for internship cycle
</div>
                <div>- Spearheaded CRM integration process, wrote user stories and managed a database of 5000+ students and NYC-based biotech and health-tech companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="educationContainer">
        <div className="containerTitle">EDUCATION</div>
        <div className="education">General Assembly, 2022 | Software Engineering Immersive Program</div>
        <div className="education">Bachelor of Arts, University of Vermont, 2017 | Environmental Studies and Political Science</div>
      </div>


    </div>
  )
}

export default Resume