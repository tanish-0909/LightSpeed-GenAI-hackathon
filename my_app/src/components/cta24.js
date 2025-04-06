import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta24.css'

const CTA24 = (props) => {
  return (
    <div className="cta24-container1 thq-section-padding">
      <div className="cta24-max-width thq-section-max-width">
        <div className="cta24-content">
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta24-text3">
                  Sign up for our newsletter to stay updated on the latest
                  trends and exclusive promotions.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta24-container2">
            <div className="cta24-row thq-flex-column">
              <div className="cta24-container3">
                <input
                  type="text"
                  placeholder="details..."
                  className="cta24-textinput thq-input"
                />
                <button type="button" className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta24-text2">
                          Let&apos;s get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA24.defaultProps = {
  action1: undefined,
  content1: undefined,
}

CTA24.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA24