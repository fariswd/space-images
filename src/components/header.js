import React from 'react'
import { Link } from 'gatsby'
import './header.css'

class Header extends React.Component {
  state = {
    isBurger: false
  }
  componentDidMount() {
    const script = document.createElement("script")
    script.src = '//use.fontawesome.com/releases/v5.1.0/js/all.js'
    script.defer = true
    document.body.appendChild(script)
  }
  render() {
    return (
      <>
        <nav className="navbar is-transparent mid-80">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="/image/rocket.png" alt="Space images" height="28" style={{marginRight: 5}}/>
              <h1 className="is-size-4 is-italic">Space Images</h1>
            </Link>
            <div onClick={() => this.setState({isBurger: !this.state.isBurger})} className={`navbar-burger burger ${this.state.isBurger ? 'is-active' : ''}`} data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className={`navbar-menu ${this.state.isBurger ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              {/* <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/archive">
                  Archive
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/appearance">
                    Appearance
                  </Link>
                  <Link className="navbar-item" to="/info">
                    Info
                  </Link>
                  <Link className="navbar-item" to="social-media">
                    Social Media
                  </Link>
                </div>
              </div> */}
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>

          </div>
        </nav>
      </>
    )
  }
}

export default Header
