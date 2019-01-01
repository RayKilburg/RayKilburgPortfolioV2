import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond" /> */}
      <img className="logo" src={'https://i.imgur.com/4Iu4CA4.png'} alt="" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ray Kilburg</h1>
        <p>
          I am a Full Stack Developer and recently graduated from Rutgers Coding
          Boot Camp. Proficient in JavaScript, NodeJS, React, JQuery, CSS, HTML
          and have experince in C++ and Java. I have also attended Cal Hacks and
          Twitchs Developer Day.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            <b>About</b>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            <b>Work</b>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            <b>Skills</b>
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <b>Contact</b>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
