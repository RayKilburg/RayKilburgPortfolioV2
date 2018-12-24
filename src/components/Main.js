import React from 'react'
import PropTypes from 'prop-types'

import './compCSS/main.css'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
// import GiphyApp from '../images/giphyapp.JPG'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )
    // INTRO
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <img src={'https://i.imgur.com/4Iu4CA4.png'} alt="" /> */}
          <span className="image main">
            <img
              className="logo"
              src={'https://i.imgur.com/4Iu4CA4.png'}
              alt=""
            />
          </span>
          <p>
            Full Stack web developer with a passion in front end UI/UX design.
            Capable of building sophisticated websites and applications with
            full database back end all the way from mock up to roll out. Most
            recently I been working on building Twitch extensions and working
            with server-less back end technology. <br />
            <a href="https://github.com/RayKilburg">GitHub</a>.
          </p>
          {close}
        </article>
        {/*WORK */}
        {/* FLICKS PICKS */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Flicks Picks</h2>
          <span className="image main">
            <img id="workImg" src={'https://i.imgur.com/LJFdwum.jpg'} alt="" />
          </span>
          <p>
            <b>Flicks Picks</b>
            <br />A tool for spontaneous moviegoers. This website recommendeds a
            movie near you.
          </p>
          <a href="https://flicks-picks.herokuapp.com/">Flicks-picks.com </a>
          <br />
          <a href="https://github.com/alexjharrison/Project-Two/commits/master">
            Github Repo
          </a>

          {close}
        </article>
        <br />
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Giphy App</h2>
          <span className="image main">
            <img src={'https://i.imgur.com/LMc1g1Q.jpg'} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
        {/*ABOUT */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>
        {/*CONTACT */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/RayKilburg"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
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
            {/* <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://twitter.com/raykilburg"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
