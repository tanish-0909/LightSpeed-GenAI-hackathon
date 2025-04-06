import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text32">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text34">
                  Read what our clients have to say about their experience
                  working with our AI-powered digital marketing firm.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text35">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            CEO, ABC Startup
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        Working with the AI post generator has saved us hours of
                        time and improved our social media engagement
                        significantly.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Marketing Manager, XYZ Company
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        The AI video post generator has helped us create
                        engaging video content quickly and efficiently, leading
                        to a boost in our online presence.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            David Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Founder, 123 Tech
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        The AI analytics provided valuable insights into our
                        customer behavior, allowing us to tailor our marketing
                        strategies effectively.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            COO, Best Products Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        The personalized AI email marketing campaigns have
                        significantly increased our conversion rates and
                        customer engagement. Highly recommended!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review2: undefined,
  author4Name: undefined,
  author1Alt: 'Image of John Doe, CEO of ABC Startup',
  author1Position: undefined,
  author2Alt: 'Image of Jane Smith, Marketing Manager at XYZ Company',
  author2Position: undefined,
  author3Name: undefined,
  review3: undefined,
  author3Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1515041219749-89347f83291a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  heading1: undefined,
  review4: undefined,
  content1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1560918801-53fe5c710a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Lee, COO of Best Products Inc.',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1740252117012-bb53ad05e370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of David Johnson, Founder of 123 Tech',
  author2Name: undefined,
}

Testimonial17.propTypes = {
  review2: PropTypes.element,
  author4Name: PropTypes.element,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  author3Position: PropTypes.element,
  author2Src: PropTypes.string,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review4: PropTypes.element,
  content1: PropTypes.element,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author4Position: PropTypes.element,
  author3Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.element,
}

export default Testimonial17
