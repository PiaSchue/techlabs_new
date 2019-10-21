import React from "react"
import "../styles/_main.scss"
import logo from "../assets/tl-logo.svg"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import MobileNav from "./MobileNav"
import Headroom from "react-headroom"
import Head from "./Head"
import { Link } from "gatsby"
import Slack from "../assets/slack.png"
import "jquery"

class Navbar extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    const { isOpen } = this.state
    return (
      <>
        <Head />
        <Headroom disableInlineStyles={true}>
          <nav className="navbar navbar-expand-lg navbar-light navbar-add">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="tl-logo" alt="tl-logo" />
            </Link>
            <button
              className="navbar-toggler"
              onClick={() => this.setState({ isOpen: !isOpen })}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navigations-08">
              <ul className="navbar-nav ml-auto d-none d-lg-flex">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/locations"
                    data-toggle="dropdown"
                    activeClassName="navLink--active"
                  >
                    Locations
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item"
                      to="/location/Muenster"
                      activeClassName="navLink--active"
                    >
                      <img src={MS} className="nav-loc-icon" alt="loc-ms" />
                      Muenster
                    </Link>
                    <Link className="dropdown-item" to="/location/Copenhagen">
                      <img src={CPH} className="nav-loc-icon" alt="loc-cph" />
                      Copenhagen
                    </Link>
                    <Link className="dropdown-item" to="/location/Barcelona">
                      <img src={BCN} className="nav-loc-icon" alt="loc-bcn" />
                      Barcelona
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/locations"
                      activeClassName="navLink--active"
                    >
                      Discover our Locations
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/foundYourOwn"
                      activeClassName="navLink--active"
                    >
                      Found your own
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/program"
                    data-toggle="dropdown"
                    activeClassName="navLink--active"
                  >
                    Program
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program"
                      activeClassName="navLink--active"
                    >
                      Program
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/dataScience"
                      activeClassName="navLink--active"
                    >
                      Data Science
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/web"
                      activeClassName="navLink--active"
                    >
                      Web Development
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ai"
                      activeClassName="navLink--active"
                    >
                      Artificial Intelligence
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ux"
                      activeClassName="navLink--active"
                    >
                      User Experience Design
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    activeClassName="navLink--active"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    activeClassName="navLink--active"
                  >
                    Blog
                  </Link>
                </li>

                {/*<li className="nav-item">
                  <Link
                    className="nav-button"
                    to="/apply"
                    activeClassName="navLink--active"
                  >
                    Apply now
                  </Link>
                </li>*/}

                <li className="nav-item">
                  <div className="btn-slack d-flex align-items-center justify-content-center">
                    <a
                      href="https://ms-techlabs.slack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Slack} alt="" className="slack-icon" />
                    </a>
                  </div>
                </li>
              </ul>
              {/* mobile view */}
            </div>
          </nav>
          {isOpen && <MobileNav />}
        </Headroom>
      </>
    )
  }
}

export default Navbar
