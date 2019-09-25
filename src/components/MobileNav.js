import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import { Link } from "gatsby"
import Slack from "../assets/slack.png"

class MobileNav extends Component {
  state = {
    locationOpen: false,
    programOpen: false,
  }
  render() {
    const { locationOpen, programOpen } = this.state
    return (
      <>
        <div className="mobileNav  d-lg-none d-xl-none">
          <ul className="navbar-nav ml-auto d-sm-block d-md-block mo">
            <li className="nav-item">
              <h3
                className="nav-link mobileNav--link text-center"
                onClick={() => {
                  this.setState({
                    locationOpen: !locationOpen,
                    programOpen: false,
                  })
                }}
              >
                Locations{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mr-3 mt-1 ml-4"
                />
              </h3>
              {locationOpen && (
                <ul className="mobileNav--subMenu">
                  <Link
                    to="/locations"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li>Locations</li>
                  </Link>
                  <hr />
                  <Link
                    to="/location/Muenster"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={MS} alt="" className="mobileNav--icon" />
                      </span>
                      Münster
                    </li>
                  </Link>

                  <Link
                    to="/location/Copenhagen"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={CPH} alt="" className="mobileNav--icon" />
                      </span>
                      Copenhagen
                    </li>
                  </Link>
                  <hr />
                  <Link
                    to="/foundYourOwn"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-4">Found your own</li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <h3
                className="nav-link mobileNav--link text-center"
                onClick={() => {
                  this.setState({
                    programOpen: !programOpen,
                    locationOpen: false,
                  })
                }}
              >
                Program
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mr-3 mt-1 ml-4"
                />
              </h3>
              {programOpen && (
                <ul className="mobileNav--subMenu">
                  <Link
                    to="/program"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li>Program</li>
                  </Link>
                  <hr />
                  <Link
                    to="/web"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">Web Development</li>
                  </Link>
                  <Link
                    to="/dataScience"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">Data Science</li>
                  </Link>
                  <Link
                    to="/ai"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">Artificial Intelligence</li>
                  </Link>
                  <Link
                    to="/ux"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">User Experience Design</li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/blog" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">Blog</h3>
              </li>
            </Link>
            <li className="nav-item mt-2">
              <div className="btn-slack_mobil d-flex align-items-center justify-content-center">
                <a
                  href="https://ms-techlabs.slack.com"
                  target="_blank"
                  className="noDec"
                  rel="noopener noreferrer"
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={Slack} alt="" className="slack-icon" />
                    </div>
                    <div className="col-10 text-center">
                      <h4 className="btn-slack_mobil-h4">Join our Slack</h4>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default MobileNav
