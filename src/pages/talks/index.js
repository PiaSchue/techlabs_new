import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"

import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-intl"
import LearnMore from "../../components/landingpage/learnMore"
import Heading from "../../components/smallComponents/Heading"

const Index = ({ data }) => {
  const [width, setWidth] = useState()
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWidth(window.innerWidth)
    }
  }, [setWidth])

  return (
    <Layout>
      <div className="container talk py-5">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <span className="talk__tl">Tech</span>Labs Talks
            </h1>
            <h2 className="talk__tl--sm">{data.content.subtitle}</h2>
            <div className="row my-4">
              <div className="col-md-5 talk__speaker--names">
                <h5>{data.content.speakers[0].name}</h5>
                <h5 className="talk__tl">{data.content.speakers[0].company}</h5>
              </div>
              <div className="col-md-6">
                <h5>{data.content.speakers[1].name}</h5>
                <h5 className="talk__tl">{data.content.speakers[1].company}</h5>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col talk__speaker--names">
                <h5>Maren Greywe</h5>
                <h5 className="talk__tl">Your Host</h5>
              </div>
            </div>
            <p className="talk__instruction">
              <span>{data.content.when.split(" ")[0]}</span>{" "}
              {data.content.when.split(" ")[1]}
            </p>
          </div>
          <div className="col-md-6">
            <div className="talk__speaker">
              <div className="talk__speaker--card">
                <Img
                  alt={data.content.speakers[0].name}
                  fluid={data.content.speakers[0].image.fluid}
                  className="talk__speaker"
                  style={{
                    width: width > 600 ? "250px" : "150px",
                  }}
                />
              </div>
              <div className="talk__speaker--card">
                <Img
                  alt={data.content.speakers[1].name}
                  fluid={data.content.speakers[1].image.fluid}
                  style={{
                    width: width > 600 ? "250px" : "150px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 py-5 talk text-center">
        <h1>
          <span className="talk__tl">Live</span>Talk
        </h1>
        <div className="talk-video">
          <iframe
            title="video"
            src={data.content.videoLink}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <button
          class="btn btn-primary my-5"
          onClick={() => {
            setChatOpen(!chatOpen)
          }}
        >
          {chatOpen ? "Close Chat" : "Open Chat"}
        </button>
        {chatOpen && (
          <div className="talk-video">
            <iframe
              title="chat"
              src="https://vimeo.com/event/484993/chat/"
              frameborder="0"
            ></iframe>
          </div>
        )}
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <Heading
              heading={<FormattedMessage id={"talk.contact.heading"} />}
              subheading={<FormattedMessage id={"talk.contact.subheading"} />}
            ></Heading>
            <div className="row">
              <div className="col-md-6 my-4 d-flex flex-column align-items-center text-center">
                <img
                  src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                  alt="picnic"
                  width="50px"
                />
                <h4 className="my-3">Cristina Cioric</h4>
                <a
                  href="mailto:cristina.ciorici@teampicnic.com"
                  className="talk__hr"
                >
                  <FormattedMessage id={"talk.contact"}>
                    Get in contact
                  </FormattedMessage>
                </a>
              </div>
              <div className="col-md-6 my-4 d-flex flex-column align-items-center text-center">
                <img
                  src="https://image.flaschenpost.de/CI/fp-logo.png"
                  alt="flapo"
                  width="50px"
                />
                <h4 className="my-3">Philipp Epple</h4>
                <a
                  className="talk__hr"
                  href="mailto:philipp.epple@flaschenpost.de"
                >
                  <FormattedMessage id={"talk.contact"}>
                    Get in contact
                  </FormattedMessage>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid talk__newsletter">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 text-white text-center">
              <h2>
                <FormattedMessage id={"talk.notified"}>
                  Get notified about future TechLabs Talks
                </FormattedMessage>
              </h2>
              <a
                className="btn btn-secondary my-4"
                href="http://eepurl.com/hjx355"
              >
                <FormattedMessage id={"talk.register"}>
                  Register here
                </FormattedMessage>
              </a>
            </div>
          </div>
        </div>
      </div>
      <LearnMore
        backgroundImage={data.background_location.childImageSharp.fluid}
      />
    </Layout>
  )
}

export default Index

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query($locale: String) {
    content: contentfulTalksPage(node_locale: { eq: $locale }) {
      subtitle
      when
      where
      videoLink
      mailchimpLink
      speakers {
        name
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        company
      }
    }
    background_location: file(
      relativePath: { eq: "background_locations.png" }
    ) {
      ...fluidImage
    }
  }
`
