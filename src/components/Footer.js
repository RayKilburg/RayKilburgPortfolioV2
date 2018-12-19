import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    {/* <p className="copyright">
      &copy; Gatsby Starter - Dimension. Design:{' '}
      <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p> */}
    <ul className="icons">
      <li>
        <a href="#" className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ray-kilburg-606894118/"
          className="icon fa-linkedin"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/RayKilburg" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
