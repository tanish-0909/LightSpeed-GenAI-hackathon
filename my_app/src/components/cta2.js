import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta2.css'

const CTA2 = (props) => {
  return (
    <div className="cta2-container1 thq-section-padding">
      <div className="cta2-max-width thq-section-max-width">
        <div className="cta2-content">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta2-text4">
                  Supercharge Your Social Media presence with AI
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta2-text5">
                  Unlock the power of AI technology to revolutionize your
                  digital marketing strategies. Sign up now to experience the
                  future of marketing.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta2-container2">
            <div className="cta2-row thq-flex-column">
              <div className="cta2-container3">
                <input
                  type="text"
                  name="prompt"
                  placeholder="Prompt"
                  className="cta2-textinput thq-input"
                />
                <button type="button" className="cta2-button thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta2-text3">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta2-text6">
                    Have questions? Contact us for a personalized consultation.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA2.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
  content2: undefined,
}

CTA2.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
}

export default CTA2
