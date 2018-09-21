import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({data}) => (
  <div className="main">
    <div className="main__container-about">
      <div className="main__text">
        <div className="main__title">
          <h2>About</h2>
          <p>A little about me.</p>
        </div>
        <p>Hello, my name is Travis. I am a Front End Developer living in Atlanta, GA. 👋</p>
        <p>I am interested in building things for the web, Learning new things as I go and documenting my learnings on my Youtube channel, Dev Material. Currently, I devote most of my time to frontend side of things, while digging into the backend whenever necessary.</p>
        <p>Formerly, I was an Apprentice at Sparkbox where I learned how to design for the web and build responsive, content-focused, and well-crafted websites and apps from some of the best in the industry.</p>
      </div>
      <div className="main__about-img" id="">
        <img src={data.file.childImageSharp.sizes.src} alt=""></img>
        <div className="topline">
          <p>If you want to contact me, click that little email link below this textblock.</p>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:traviscsanon@gmail.com">Email</a>
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a href="https://github.com/travissanon">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "t01.jpg" }) {
      childImageSharp {
        sizes {
          src
        }
      }
    }
  }
`;