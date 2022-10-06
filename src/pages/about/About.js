import './about.css'
// import portrait from './public/portrait.jpg'

const About = () => {
  
  return (
    <div id="aboutPage">
      <div id="bioContainer">
        <div id="biographyText">
          <p>
            Hi, my name is Yangtsel. 
          </p>  
          <p>
            I am a front-end developer for user-oriented digital products based out of Brooklyn, New York. With 3+ years of prior experience in product management, my work spans creating feature-rich user interfaces within the health-tech and media spaces. I am interested in the confluence between technology, infrastructure, and design and how these forces shape the world around us.
          </p>
          <p>
            Lately, I've been enjoying: collecting rocks, visiting my homeland, Tibet, via google maps, hiking, gardening, and making music.
          </p>
          <p id="email"> You can reach me at yangtsel.sherap@gmail.com | are.na | linkedin ꕥ </p>              
        </div>
        <div id="imageBio">
          <img id="imageBio" src="https://i.imgur.com/jUf3fFL.jpg" alt="profilePicture" />
        </div>
      </div>
    {/* <div id="contact">
      <div>
        <p id="contactTitle">CONTACT</p>
      </div>
      <div>
        <p id="email"> You can reach me at yangtsel.sherap@gmail.com | are.na | linkedin ꕥ </p>
      </div>
    </div> */}
  </div>
  )
}

export default About