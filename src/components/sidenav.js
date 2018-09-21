import React from 'react'
import { FaTwitter, FaYoutube, FaMedium, FaCodepen, FaGithub, FaInstagram, FaCheck } from 'react-icons/fa';

const Sidenav = ({ siteTitle }) => (
  <div className="sidebar">
    <h2 className="sidebar__intro">
      I'm Travis, a developer and content creator from Atlanta.
    </h2>
    <div className="sidebar__social">
      <h2>Social Media</h2>
      <ul>
        <li><a href="https://www.youtube.com/channel/UClE-pN-OOQrRUwi6HFHmDpA"><FaYoutube />Youtube</a></li>
        <li><a href="https://twitter.com/DevMaterial"><FaTwitter />Twitter</a></li>
        <li><a href="https://github.com/travissanon"><FaGithub />Github</a></li>
        <li><a href="https://medium.com/@travissanon"><FaMedium />Medium</a></li>
        <li><a href="https://codepen.io/DevMaterial/"><FaCodepen />Codepen</a></li>
        <li><a href="https://www.instagram.com/dev.material/"><FaInstagram />Instagram</a></li>
      </ul>
    </div>
    <div className="sidebar__topics">
      <h2>Topics</h2>
      <ul>
        <li><a href="#">🔥Javascript</a></li>
        <li><a href="#">🏄Front-End Development</a></li>
        <li><a href="#">🤓Back-End Development</a></li>
        <li><a href="#">🎨CSS & Styles</a></li>
        <li><a href="#">🎉Other</a></li>
      </ul>
    </div>
    {/* <form id="subscribe-form" method="post" action="https://tinyletter.com/devmaterial">
      <div classNameName="sidenav__newsletter">
        <div for="email" className="sr-only fake-label"><h2>Newsletter</h2></div>
        <p>Subscribe to the newsletter and get infrequent content about web development.</p>
        <input type="email" id="email" name="email" value="" placeholder=" email@example.com " />
        <input type="submit" value="Subscribe" />
      </div>
    </form> */}
  </div>
)

export default Sidenav
