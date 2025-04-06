import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta22.css'

const CTA22 = (props) => {
  return (
    <div
      className={`cta22-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta22-max-width thq-section-max-width">
        <div className="cta22-content">
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta22-text">
                  Sign up for our newsletter to receive the latest updates on
                  new arrivals, exclusive offers, and promotions.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta22-container2">
            <div className="cta22-row thq-flex-column">
              <div className="cta22-container3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="thq-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA22.defaultProps = {
  content1: undefined,
  rootClassName: '',
}

CTA22.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA22