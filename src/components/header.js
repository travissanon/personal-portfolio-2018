import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="header">
    <div className="header__nav">
      <h1 className="header__nav-brand"><Link to="/">TS</Link></h1>
      <ul className="header__nav-links">
        <li><Link to="/page-2/">ABOUT</Link></li>
        <li><Link to="/page-3/">ARTICLES</Link></li>
        <li><Link to="/page-4/">VIDEOS</Link></li>
        <li><Link to="/page-5/">PROJECTS</Link></li>
      </ul>
      <div className="header__search">
        {/* <FaSearch />
        <input type="text" placeholder="SEARCH..." /> */}
      </div>
    </div>
  </div>
)

export default Header
