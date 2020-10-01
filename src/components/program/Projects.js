import React from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import Button from "../smallComponents/Button"

// assets
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import ds from "../../assets/ds.png"


const Projects = props => {
  const gaLocation = this.props.gaLocation
  return (
    <Container>
      <Heading
        heading={<FormattedMessage id={"projects.heading"}/>}
        subheading={<FormattedMessage id={"projects.subheading"}/>}
      />
      <div className="row d-flex">
        <div className="col-md-4 py-5 justify-content-center align-self-center">
          <div className="card h-75 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">
                <FormattedMessage id={"projects.first.heading"}/>
              </span>
            </h3>
            <div className="card-body">
              <div className="row">
                <p className="projects--text">
                  <FormattedMessage id={"projects.first.text"}/>
                </p>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={web} alt="" />
                  </div>
                  <div className="col-10">
                    <p><FormattedMessage id={"projects.tech.webdev"}/></p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ds} alt="" />
                  </div>
                  <div className="col-10">
                    <p><FormattedMessage id={"projects.tech.ds"}/></p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  gaLocation={gaLocation}
                  gaSection="p_fp"
                  text={<FormattedMessage id={"projects.button"}/>}
                  link="https://medium.com/techlabsms/why-is-there-always-so-much-month-left-at-the-end-of-the-money-453ba6a5f256"
                  isExternal={true}
                  primary={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 justify-content-center align-self-center">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">
                <FormattedMessage id={"projects.second.heading"}/>
              </span>
            </h3>
            <div className="card-body">
              <div className="row">
                <p className="projects--text">
                  <FormattedMessage id={"projects.second.text"}/>
                </p>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ai} alt="" />
                  </div>
                  <div className="col-10">
                    <p><FormattedMessage id={"projects.tech.ai"}/></p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={web} alt="" />
                  </div>
                  <div className="col-10">
                    <p><FormattedMessage id={"projects.tech.webdev"}/></p>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={ds} alt="" />
                  </div>
                  <div className="col-10">
                    <p><FormattedMessage id={"projects.tech.ds"}/></p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  gaLocation={gaLocation}
                  gaSection="p_zeb"
                  text={<FormattedMessage id={"projects.button"}/>}
                  link="https://medium.com/techlabsms/zeb-project-f239ac0abc8c"
                  isExternal={true}
                  primary={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 justify-content-center align-self-center">
          <div className="card h-75 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">
                <FormattedMessage id={"projects.third.heading"}/>
              </span>
            </h3>
            <div className="card-body">
              <div className="row">
                <p className="projects--text">
                  <FormattedMessage id={"projects.third.text"}/>               
                </p>
                <div className="row w-100">
                  <div className="col-2">
                    <img src={web} alt="" />
                  </div>
                  <div className="col-10">
                    <p><FormattedMessage id={"projects.tech.ux"}/></p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  gaLocation={gaLocation}
                  gaSection="p_wt"
                  text={<FormattedMessage id={"projects.button"}/>}
                  link="https://medium.com/techlabsms/war-of-talents-5c090d590a1f"
                  isExternal={true}
                  primary={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projects
