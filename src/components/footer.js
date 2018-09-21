import React from 'react'
import Link from 'gatsby-link'
import { FaTwitter, FaYoutube, FaMedium, FaCodepen, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
  <div className="footer__container">
    <div className="footer__grid-four">
      <div>
        <div className="footer__intro">
          <h1 classNameName="footer__nav-brand"><Link to="/">TRAVIS SANON</Link></h1>
          <p>Developer & content creator.</p>
        </div>
        <nav className="footer__social">
          <a href="https://www.youtube.com/channel/UClE-pN-OOQrRUwi6HFHmDpA"><FaYoutube /></a>
          <a href="https://twitter.com/DevMaterial"><FaTwitter /></a>
          <a href="https://github.com/travissanon"><FaGithub /></a>
          <a href="https://medium.com/@travissanon"><FaMedium /></a>
          <a href="https://codepen.io/DevMaterial/"><FaCodepen /></a>
          <a href="https://www.instagram.com/dev.material/"><FaInstagram /></a>
        </nav>
        <form id="subscribe-form" method="post" action="https://tinyletter.com/devmaterial">
          <div className="footer__newsletter">
            <h2>Join the newsletter!</h2>
            <p>Subscribe to the newsletter and get infrequent content about web development.</p>
            <div className="footer__subscribe-form">
              <input 
                    type="email"
                    name="email"
                    value=""
                    placeholder="Enter your email..."/>
              <input 
                    type="submit" 
                    value="Subscribe"/>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h2>Navigation</h2>
        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/page-2">About</Link>
          <Link to="/page-3">Videos</Link>
          <Link to="/page-4">Articles</Link>
          <Link to="/page-5">Projects</Link>
        </nav>
      </div>
      <div>
        <h2>Topics</h2>
        <nav className="footer__topics">
          <Link to="/">Javascript</Link>
          <Link to="/">Front-End Development</Link>
          <Link to="/">Back-End Development</Link>
          <Link to="/">CSS & Styles</Link>
          <Link to="/">Other</Link>
        </nav>
      </div>
      <div>
        <h2>Projects</h2>
        <nav className="footer__topics">
          <a href="https://eats.seesparkbox.com/">Sparkeats</a>
          <a href="https://github.com/travissanon/self-taught-collectibles">Self-Taught Collective</a>
          <a href="https://github.com/travissanon/cards-against-humanity">Cards Against Humanity</a>
          <a href="https://github.com/travissanon/ruby-tron-game">Ruby Tron Game</a>
        </nav>
      </div>
    </div>
  </div>
</div>
)

export default Footer
