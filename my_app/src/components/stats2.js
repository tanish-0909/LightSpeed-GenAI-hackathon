import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text26">
                  Our digital marketing solutions are driven by cutting-edge AI
                  technology.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text31">Why Choose Us?</span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text30">
                  Experience the power of AI in transforming your marketing
                  strategies.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text24">AI-Powered Solutions</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text27">
                      Revolutionize your digital marketing with AI-driven
                      solutions.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Expertise in AI Technology
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text22">
                      Harness the potential of AI for your marketing needs.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text23">
                      Business Analytics Review
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text21">
                      In-depth analysis of your business data for informed
                      decision-making.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text28">Custom Pricing Plans</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text29">
                      Tailored pricing plans to suit your business requirements.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat3Description: undefined,
  image1Alt: 'AI Digital Marketing Solutions',
  stat2Description: undefined,
  stat3: undefined,
  stat1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1550959087-f655e48c2b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  stat2: undefined,
  content1: undefined,
  stat1Description: undefined,
  stat4: undefined,
  stat4Description: undefined,
  content2: undefined,
  heading1: undefined,
}

Stats2.propTypes = {
  stat3Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2Description: PropTypes.element,
  stat3: PropTypes.element,
  stat1: PropTypes.element,
  image1Src: PropTypes.string,
  stat2: PropTypes.element,
  content1: PropTypes.element,
  stat1Description: PropTypes.element,
  stat4: PropTypes.element,
  stat4Description: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Stats2
