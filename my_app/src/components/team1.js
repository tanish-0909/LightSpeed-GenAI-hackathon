import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-max-width thq-section-max-width">
        <div className="team1-section-title">
          <span className="thq-body-small team1-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="team1-text37">Join Our Team Today!</span>
              </Fragment>
            )}
          </span>
          <div className="team1-content1">
            <h2 className="thq-heading-2 team1-text11">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team1-text25">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="team1-content2">
          <div className="team1-content3">
            <div className="team1-row">
              <div className="team1-container1">
                <div className="team1-card1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content4">
                    <div className="team1-title1">
                      <span className="team1-text12 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text34">John Doe</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text13 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text27">
                              CEO &amp; Co-Founder
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text14 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text29">
                            John is a visionary leader with a passion for AI
                            technology and digital marketing.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons1"></div>
                </div>
                <div className="team1-card2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content5">
                    <div className="team1-title2">
                      <span className="team1-text15 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text26">Jane Smith</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text16 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text32">
                              Chief Marketing Officer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text17 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text28">
                            Jane brings creativity and strategic thinking to our
                            marketing campaigns.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons2"></div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-card3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content6">
                    <div className="team1-title3">
                      <span className="team1-text18 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text33">Alex Johnson</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text19 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text36">
                              Lead AI Developer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text20 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text31">
                            Alex is an expert in AI algorithms and ensures our
                            tools are cutting-edge.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons3"></div>
                </div>
                <div className="team1-card4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="team1-content7">
                    <div className="team1-title4">
                      <span className="team1-text21 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text30">Sarah Lee</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-text22 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text24">
                              Business Analyst
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-text23 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text35">
                            Sarah provides valuable insights through data
                            analysis for our clients.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="team1-social-icons4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member3Src:
    'https://images.unsplash.com/photo-1639503611585-1054af5dbfab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Job: undefined,
  heading1: undefined,
  member2: undefined,
  member1Job: undefined,
  member3Alt: 'Image of Alex Johnson',
  member2Content: undefined,
  member1Content: undefined,
  member2Alt: 'Image of Jane Smith',
  member4: undefined,
  member3Content: undefined,
  member2Job: undefined,
  member3: undefined,
  member1Alt: 'Image of John Doe',
  member1: undefined,
  member4Alt: 'Image of Sarah Lee',
  member2Src:
    'https://images.unsplash.com/photo-1583264277135-6f46aa408484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Content: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
}

Team1.propTypes = {
  member3Src: PropTypes.string,
  member4Job: PropTypes.element,
  heading1: PropTypes.element,
  member2: PropTypes.element,
  member1Job: PropTypes.element,
  member3Alt: PropTypes.string,
  member2Content: PropTypes.element,
  member1Content: PropTypes.element,
  member2Alt: PropTypes.string,
  member4: PropTypes.element,
  member3Content: PropTypes.element,
  member2Job: PropTypes.element,
  member3: PropTypes.element,
  member1Alt: PropTypes.string,
  member1: PropTypes.element,
  member4Alt: PropTypes.string,
  member2Src: PropTypes.string,
  member4Content: PropTypes.element,
  member4Src: PropTypes.string,
  member3Job: PropTypes.element,
  member1Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Team1
