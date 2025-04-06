import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="features1-section-title thq-flex-row">
          <div className="features1-column thq-flex-column">
            <h2 className="thq-heading-2 features1-text10">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text22">Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="features1-text11 thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text14">
                  <span>Transforming Your Marketing Efforts</span>
                  <br></br>
                  <span>
                    Explore the powerful AI-driven features that can elevate
                    your digital marketing strategies.
                  </span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text18">Post Generation</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text13">
                        Effortlessly create engaging and relevant social media
                        posts with our AI-powered post generation tool.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text12">Video Creation</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text21">
                        Generate stunning videos for your marketing campaigns in
                        minutes using our advanced video creation AI technology.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text20">
                        Logo and Business Card Design
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Design professional logos and business cards that
                        represent your brand identity accurately with our AI
                        design tools.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions"></div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1696258686286-1191184126aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1614484690770-f69bee4de082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription: undefined,
  feature1Title: undefined,
  feature2ImageAlt: 'Video Creation Image',
  feature3Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1674027214993-52de23be5a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4NTMyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Logo and Business Card Design Image',
  feature3Title: undefined,
  feature2Description: undefined,
  sectionTitle: undefined,
  feature1ImageAlt: 'Post Generation Image',
}

Features1.propTypes = {
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features1
