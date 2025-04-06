import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id={props.features25Id} className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <Link to="/business-card-generator" className="features25-navlink">
              <div className="features25-content1">
                <h2 className="thq-heading-2">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features25-text5">
                        AI Business Card Generator
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features25-text4">
                        Create smart, stylish business cards instantly with AI.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <Link to="/email-automation" className="features25-navlink">
              <div className="features25-content2">
                <h2 className="thq-heading-2">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features25-text6">AI Email Automation</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features25-text3">
                        Generate engaging content using AI technology.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <Link to="/website-generator" className="features25-navlink">
              <div className="features25-content3">
                <h2 className="thq-heading-2">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features25-text1">AI Website Generator</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features25-text2">
                        From idea to website in seconds with AI.
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

Features25.defaultProps = {
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImgAlt: 'AI website generator',
  feature1ImgSrc: 'https://example.com/business-card.jpg',
  feature2Description: undefined,
  feature2ImgAlt: 'AI email automation',
  feature2ImgSrc: 'https://example.com/email-automation.jpg',
  feature1Description: undefined,
  feature3ImgSrc: 'https://example.com/website-generator.jpg',
  features25Id: '',
  feature1Title: undefined,
  feature2Title: undefined,
  feature1ImgAlt: 'AI business card generator',
}

Features25.propTypes = {
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  features25Id: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
}

export default Features25