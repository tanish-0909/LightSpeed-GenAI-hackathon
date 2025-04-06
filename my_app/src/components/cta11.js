import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta11.css'

const CTA11 = (props) => {
  return (
    <div
      className={`cta11-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="cta11-max-width thq-section-max-width">
        <div className="cta11-content">
          <h2 className="cta11-heading1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta11-text1">
                  Call to action that excites the visitor to try your product
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta11-content1 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta11-text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta11-actions"></div>
        </div>
      </div>
    </div>
  )
}

CTA11.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

CTA11.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default CTA11