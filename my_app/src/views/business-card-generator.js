import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import CTA2 from '../components/cta2'
import './image-generator.css'

const BusinessCardGenerator = (props) => {
  return (
    <div className="image-generator-container">
      <Helmet>
        <title>Business Card Generator - Extroverted Honest Capybara</title>
        <meta
          property="og:title"
          content="Business Card Generator - Extroverted Honest Capybara"
        />
      </Helmet>
      <Gallery2
        content1={
          <Fragment>
            <span className="image-generator-text10">
            Make your first impression unforgettable with our AI-powered 
            Business Card Generator. In just a few clicks, craft sleek, professional
            and personalized cards that reflect your brand and style. 
            No design skills needed — just your name, role, and the magic of AI. 
            It is fast, smart, and made for go-getters like you.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text11">
              Create a Business Card
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
               Enter your name, job title, contact info, and style preference
               We will handle the rest!"
              </span>
              <br></br>
              <span>
                (e.g. &quot;"Design a minimalist business card for a software engineer 
                named Rahul Mehta at 'CodeNest Inc.' Include a QR code, 
                dark theme, and tech-style typography."&quot;)
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
            <span className="image-generator-text19">AI Business Card generator</span>
          </Fragment>
        }
      ></CTA2>
    </div>
  )
}

export default BusinessCardGenerator
