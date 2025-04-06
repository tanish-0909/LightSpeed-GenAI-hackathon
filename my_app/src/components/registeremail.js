import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './registeremail.css'

const Registeremail = (props) => {
  return (
    <div className="registeremail-container1 thq-section-padding">
      <div className="registeremail-max-width thq-section-max-width">
        <div className="registeremail-container2 thq-flex-row">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="registeremail-text7">
                  Ready to elevate your style?
                </span>
              </Fragment>
            )}
          </h2>
          <div className="registeremail-content">
            <p className="thq-body-large registeremail-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="registeremail-text5">
                    Discover our exclusive collection of products
                  </span>
                </Fragment>
              )}
            </p>
            <div className="registeremail-container3">
              <div className="registeremail-row">
                <div className="registeremail-container4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="thq-input"
                  />
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.action1 ?? (
                        <Fragment>
                          <span className="registeremail-text8">Shop Now</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <span className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="registeremail-text6">
                      Sign up for our newsletter to receive updates and
                      promotions
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="registeremail-background-image1 thq-img-ratio-16-9"
      />
      <img
        alt={props.backgroundImageAlt1}
        src={props.backgroundImageSrc1}
        className="registeremail-background-image2 thq-img-ratio-16-9"
      />
      <img
        alt={props.backgroundImageAlt11}
        src={props.backgroundImageSrc11}
        className="registeremail-background-image3 thq-img-ratio-16-9"
      />
    </div>
  )
}

Registeremail.defaultProps = {
  backgroundImageSrc1:
    'https://images.unsplash.com/photo-1550895030-823330fc2551?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2N3x8YWJzdHJhY3R8ZW58MHx8fHwxNzEzOTQ2MzU0fDA&ixlib=rb-4.0.3&w=1500',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1550895030-823330fc2551?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2N3x8YWJzdHJhY3R8ZW58MHx8fHwxNzEzOTQ2MzU0fDA&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
  content2: undefined,
  backgroundImageAlt11: 'Image of products',
  heading1: undefined,
  backgroundImageSrc11:
    'https://images.unsplash.com/photo-1550895030-823330fc2551?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2N3x8YWJzdHJhY3R8ZW58MHx8fHwxNzEzOTQ2MzU0fDA&ixlib=rb-4.0.3&w=1500',
  backgroundImageAlt: 'Image of products',
  action1: undefined,
  backgroundImageAlt1: 'Image of products',
}

Registeremail.propTypes = {
  backgroundImageSrc1: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  content1: PropTypes.element,
  content2: PropTypes.element,
  backgroundImageAlt11: PropTypes.string,
  heading1: PropTypes.element,
  backgroundImageSrc11: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  action1: PropTypes.element,
  backgroundImageAlt1: PropTypes.string,
}

export default Registeremail