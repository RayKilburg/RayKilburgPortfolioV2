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
          <h2 className="major">About Me</h2>
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
          <a href="https://github.com/alexjharrison/Project-Two">Github Repo</a>

          {close}
        </article>
        <br />
        {/* GIPHY APP */}
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
            This is an app I built using the Gigpy API. This app is desinged to
            find gifs from your favorite TV Shows & Movies. Click on the gifs to
            activate and puase them. Hosted on Github Pages.
          </p>
          <a href="https://raykilburg.github.io/GiphyAPI/">Giphy App </a>
          <br />
          <a href="https://github.com/RayKilburg/GiphyAPI">Github Repo</a>

          {close}
        </article>
        <br />
        {/* RGB GAME */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">RGB Game</h2>
          <span className="image main">
            <img src={'https://i.imgur.com/gBGMvSg.jpg'} alt="" />
          </span>
          <p>
            A simple guessing game with a little bit of style. Hosted with
            Github Pages.
          </p>
          <a href="https://raykilburg.github.io/RGB-Game/">RGB Game </a>
          <br />
          <a href="https://github.com/RayKilburg/RGB-Game">Github Repo</a>

          {close}
        </article>
        <br />
        {/* BURGER */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Burger App</h2>
          <span className="image main">
            <img src={'https://i.imgur.com/YS25nRv.jpg'} alt="" />
          </span>
          <p>
            Add a burger that your would like to eat, click the button and
            enjoy. This Apps backend was built using MySQL as a DB and also uses
            Handlebars as a front-end javascript framework. Deployed on Heroku.
          </p>
          <a href="https://burgerrk.herokuapp.com/">Burger App </a>
          <br />
          <a href="https://github.com/RayKilburg/Burger">Github Repo</a>

          {close}
        </article>
        <br />
        {/* RK PHOTOGRAPHY */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Photography Portfolio</h2>
          <span className="image main">
            <img src={'https://i.imgur.com/vSNa4k0.png'} alt="" />
          </span>
          <p>
            This is a my personal photography portfolio. It is currently
            deployed on Netlify. Future plans are to rebuild using GatsbyJs.
          </p>
          <a href="https://priceless-roentgen-92daeb.netlify.com">
            Photography Portfolio
          </a>
          <br />
          <a href="https://github.com/RayKilburg/RayKilburgPhotography">
            Github Repo
          </a>

          {close}
        </article>
        {/* SKILLS */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Events</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            <h3>Cal hacks 3.0</h3>
            <h3>Rutgers Coding Boot Camp</h3>
            <h3>Twitch Con & Hackathon</h3>
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
