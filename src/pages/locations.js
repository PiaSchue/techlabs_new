import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import locationsImg from "../assets/locations.png"
import arrowDown from "../assets/arrowDown.svg"
import "../styles/_main.scss"
import LocationCard from "../components/LocationCard"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import muenster from "../assets/muenster.jpg"

class Locations extends Component {
  constructor(){
    super();
    this.state = {
      locations: [
        {
          city: "Münster",
          imgTop: muenster,
          icon: MS,
        },
        {
          city: "Barcelona",
          imgTop: muenster,
          icon: BCN,
        },
        {
          city: "Copenhagen",
          imgTop: muenster,
          icon: CPH,
        },
        {
          city: "Munich",
          imgTop: muenster,
          icon: MS,
        },
      ],
      search: "",
    }
  }
  render() {
    const { locations, search } = this.state;
    const filteredLocations = locations.filter(location => {
      return location.city.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div className="locations">
        <Navbar />
        <div className="container-fluid">
          <section className="section-picture">
            <div className="container py-5">
              <div className="row margin-top-bot padding-location">
                <div className="col-md-5 col-lg-5 border-0 text-left">
                  <h1 className="mt-3">
                    Discover our <br /> locations
                  </h1>
                  <p>
                    TechLabs is the community that enables you to become a
                    Digital Entrepreneur. Exciting meetups, talks, hackathons,
                    social events, workshops and much more await you. Discover
                    TechLabs now.
                  </p>
                  <a className="locations--hero-btn" href="#locations-techlabs">
                    <img src={arrowDown} alt="locations" />
                  </a>
                </div>
                <div className="col-md-7 col-lg-7 text-center">
                  <img
                    src={locationsImg}
                    alt="locations"
                    className="locations--hero-img"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="locations-list py-5">
            <div className="container" id="locations-techlabs">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="section-title">TechLabs locations</h1>
                  <div className="section-divider" />
                </div>
                <div className="col-md-4">
                  <input
                    type="search"
                    className="locations--search mt-2"
                    placeholder="Search location"
                    onChange={e => {
                      this.setState({
                        search: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>

              <div className="row">
                {filteredLocations && filteredLocations.map(location => (
                  <LocationCard
                    imgTop={location.imgTop}
                    city={location.city}
                    icon={location.icon}
                    
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Locations
