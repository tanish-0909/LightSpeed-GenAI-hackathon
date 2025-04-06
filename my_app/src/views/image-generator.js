import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import CTA2 from '../components/cta2'
import './image-generator.css'

const ImageGenerator = (props) => {
  return (
    <div className="image-generator-container">
      <Helmet>
        <title>Image-Generator - Extroverted Honest Capybara</title>
        <meta
          property="og:title"
          content="Image-Generator - Extroverted Honest Capybara"
        />
      </Helmet>
      <Gallery2
        content1={
          <Fragment>
            <span className="image-generator-text10">
              Explore our AI-powered social media post generation for quick
              image creation along with trusted, catchy captions designed to
              boost CTR, and smarter engagement strategies to connect with a
              wider audience effortlessly
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text11">
              Create a Post for Social Media
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
                Please give a detailed prompt of the type of post you would
                like.
              </span>
              <br></br>
              <span>
                (e.g. &quot;Generate an Instagram post for marketing of an
                EdTech Startup using the image of a happy girl studying from her
                laptop&quot;)
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
            <span className="image-generator-text19">AI image generator</span>
          </Fragment>
        }
      ></CTA2>
    </div>
  )
}

export default ImageGenerator
