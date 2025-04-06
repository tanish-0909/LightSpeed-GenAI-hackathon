import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta23.css'

const CTA23 = (props) => {
  return (
    <div
      className={`cta23-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta23-max-width thq-section-max-width">
        <div className="cta23-content">
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta23-text">
                  Sign up for our newsletter to stay updated on the latest
                  trends and exclusive promotions.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta23-container2">
            <div className="cta23-row thq-flex-column">
              <div className="cta23-container3">
                <input
                  type="text"
                  placeholder="Names"
                  className="cta23-textinput1 thq-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Credentials"
        className="cta23-textinput2 thq-input"
      />
      <input
        type="text"
        placeholder="Contacts"
        className="cta23-textinput3 thq-input"
      />
    </div>
  )
}

CTA23.defaultProps = {
  content1: undefined,
  rootClassName: '',
}

CTA23.propTypes = {
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA23