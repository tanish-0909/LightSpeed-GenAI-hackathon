import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta21.css'

const CTA21 = (props) => {
  return (
    <div
      className={`cta21-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta21-max-width thq-section-max-width">
        <div className="cta21-content">
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta21-text">
                  Sign up for our newsletter to receive the latest updates on
                  new arrivals, exclusive promotions, and more!
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta21-container2">
            <div className="cta21-row thq-flex-column">
              <div className="cta21-container3">
                <input
                  type="text"
                  placeholder="Tell us about your product in detail"
                  className="cta21-textinput thq-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA21.defaultProps = {
  content1: undefined,
  rootClassName: '',
}

CTA21.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA21