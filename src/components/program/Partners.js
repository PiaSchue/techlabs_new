import React from "react"
import quote from "../../assets/quote.png"
import placeholder from "../../assets/placeholder.png"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const Partners = ({
  heading,
  subheading,
  quoteText,
  quoteName,
  quoteRole,
  quoteCompanyLogo,
}) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row mt-5">
        <div className="col-md-1 text-right">
          <img src={quote} alt="" />
        </div>
        <div className="col-md-9">
          <p className="partner--quote">{quoteText}</p>
        </div>
        <div className="col-md-1 text-left">
          <img src={quote} alt="qoute sign" className="partner--quote-sign" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-md-2 text-center text-md-right">
          <img src={placeholder} alt="" />
        </div>
        <div className="col-md-8 text-center text-md-left">
          <p className="partner--person">
            <span className="partner--name">{quoteName} </span>
            <br />
            <span className="partner--role">{quoteRole} @ </span>
            <span>
              <img src={quoteCompanyLogo} alt="accenture" className="ml-2" />
            </span>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Partners
