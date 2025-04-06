import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id={props.features24Id} className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <Link to="/image-generator" className="features24-navlink">
              <div className="features24-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features24-text5">
                        AI Post Generator
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features24-text4">
                        Automatically generate engaging and relevant social
                        media posts using AI algorithms.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <Link to="/logo-generator" className="features24-navlink">
              <div className="features24-content2">
                <h2 className="thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features24-text6">AI Logo Generator</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features24-text3">
                        Create professional logos for your brand with the help of
                        AI technology.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <Link to="/video-generator" className="features24-navlink">
              <div className="features24-content3">
                <h2 className="thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features24-text1">
                        AI Video Post Generator
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features24-text2">
                        Generate AI-powered video posts for your social media
                        channels effortlessly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImgAlt: 'AI video post generator',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1558095625-f882e3436125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature2ImgAlt: 'AI logo generator',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1738528333768-6e2e0932c40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1684369585053-2b35888b3ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  features24Id: '',
  feature1Title: undefined,
  feature2Title: undefined,
  feature1ImgAlt: 'AI post generator',
}

Features24.propTypes = {
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  features24Id: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
}

export default Features24