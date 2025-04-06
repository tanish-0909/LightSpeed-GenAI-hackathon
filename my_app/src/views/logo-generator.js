import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import CTA2 from '../components/cta2'
import './image-generator.css'

const LogoGenerator = (props) => {
  return (
    <div className="image-generator-container">
      <Helmet>
        <title>Logo-Generator - Extroverted Honest Capybara</title>
        <meta
          property="og:title"
          content="Logo-Generator - Extroverted Honest Capybara"
        />
      </Helmet>
      <Gallery2
        content1={
          <Fragment>
            <span className="image-generator-text10">
              Explore our AI-powered logo generation for quick and creative
              logo creation along with trusted, catchy taglines designed to
              attract audience and make a indelible mark.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text11">
              Create a Logo for Your Start-Up
            </span>
          </Fragment>
        }
      ></Gallery2>
      <CTA2
        action1={
          <Fragment>
            <span className="image-generator-text12">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="image-generator-text13">
              <span>
                Please give a detailed prompt of the company name and what it does
              </span>
              <br></br>
              <span>
                (e.g. &quot;Generate a logo of an EdTech start-up named
                XYZ using the colours Blue and White and minimalist&quot;)
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="image-generator-text18">
              Have questions? Contact us for a personalized consultation.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text19">AI Logo generator</span>
          </Fragment>
        }
      ></CTA2>
    </div>
  )
}

export default LogoGenerator
