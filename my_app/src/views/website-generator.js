import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import CTA2 from '../components/cta2'
import './image-generator.css'

const WebsiteGenerator = (props) => {
  return (
    <div className="image-generator-container">
      <Helmet>
        <title>Website Generator - Extroverted Honest Capybara</title>
        <meta
          property="og:title"
          content="Website Generator - Extroverted Honest Capybara"
        />
      </Helmet>
      <Gallery2
        content1={
          <Fragment>
            <span className="image-generator-text10">
            Launch your website in minutes, not months. With our AI-powered Website Generator,
             all you need is your idea—we handle the design, layout, and content. 
             Whether you're a creator, startup, or small business, get a stunning, 
             mobile-ready website without writing a single line of code. 
             It is fast, smart, and built to impress.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text11">
              Create a Website
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
              Tell us what your website is about, who it's for
              and any style or features you would like to try
              </span>
              <br></br>
              <span>
                (e.g. &quot;I need a personal portfolio website to showcase
                my projects and resume. I'm a freelance graphic designer, 
                so I want it to look creative and modern. 
                Include sections for About Me, Portfolio, Contact, and Testimonials. 
                Prefer a clean layout with pastel colors and bold typography. 
                Add links to my Instagram and Behance too.&quot;)
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
            <span className="image-generator-text19">AI Website Generator</span>
          </Fragment>
        }
      ></CTA2>
    </div>
  )
}

export default WebsiteGenerator
