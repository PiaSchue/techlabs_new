import React, { Component } from "react"

// plugins & external
import { FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import ProgrammHero from "../components/program/ProgrammHero"
import WhatYouWillLearn from "../components/program/WhatYouWillLearn"
import RightImageSection from "../components/shared/RightImageSection"
import LeftImageSection from "../components/shared/LeftImageSection"
import Projects from "../components/program/Projects"
import CallToAction from "../components/shared/CallToAction"
import FaqQuestion from "../components/shared/FaqQuestion"
import Faq from "../components/shared/Faq"
import Layout from "../components/Layout/Layout"

// assets
import ai_cover from "../assets/ai_cover.png"
import david from "../assets/david.png"
import robot from "../assets/ai-robot.png"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"

class ai extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={<FormattedMessage id={"ai.ai.programmhero.headingFirst"}/>}
            headingSecond={<FormattedMessage id={"ai.ai.programmhero.headingSecond"}/>}
            showCard={true}
            background={background}
            intro={<FormattedMessage id={"ai.ai.programmhero.intro"}/>}
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={<FormattedMessage id={"ai.what.RightImageSection.heading"}/>}
            subheading={<FormattedMessage id={"ai.what.RightImageSection.subheading"}/>}
            text={<FormattedMessage id={"ai.what.RightImageSection.text"}/>}
            image={robot}
          />
          <RightImageSection
            heading={<FormattedMessage id={"ai.why.RightImageSection.heading"}/>}
            subheading={<FormattedMessage id={"ai.why.RightImageSection.subheading"}/>}
            text={<FormattedMessage id={"ai.why.RightImageSection.text"}/>}
            image={ai_cover}
          />
          <WhatYouWillLearn
            intro={<FormattedMessage id={"ai.learn.WhatYouWillLearn.intro"}/>}
            first={<FormattedMessage id={"ai.learn.WhatYouWillLearn.first"}/>}
            second={<FormattedMessage id={"ai.learn.WhatYouWillLearn.second"}/>}
            third={<FormattedMessage id={"ai.learn.WhatYouWillLearn.third"}/>}
            fourth={<FormattedMessage id={"ai.learn.WhatYouWillLearn.fourth"}/>}
          />
          <LeftImageSection
            heading={<FormattedMessage id={"ai.more.LeftImageSection.heading"}/>} 
            subheading={<FormattedMessage id={"ai.more.LeftImageSection.subheading"}/>}
            text={<FormattedMessage id={"ai.more.LeftImageSection.text"}/>}
            image={david}
          />
          <Projects />
          <CallToAction />
           <Faq>
            <FaqQuestion
              question="faq_1.question"
              answer="faq_1.answer"
            />
            <FaqQuestion
              question="faq_2.question"
              answer="faq_2.answer"
            />
            <FaqQuestion
              question="faq_3.question"
              answer="faq_3.answer"
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
                  <FormattedMessage id={"faq.button"}/>                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ai
