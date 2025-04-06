import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div
      className={`hero8-header26 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text5">
                    AI-Powered Digital Marketing Solutions
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero8-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero8-text6">
                    Choose from different pricing plans and get access to tools
                    for creating engaging content effortlessly
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text8">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero8-text7">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt:
    'AI Digital Marketing Firm offering AI-powered digital marketing solutions',
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
  action2: undefined,
  action1: undefined,
}

Hero8.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  action2: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero8
