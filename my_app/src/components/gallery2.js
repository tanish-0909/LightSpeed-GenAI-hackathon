import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery2.css'

const Gallery2 = (props) => {
  return (
    <div className="gallery2-gallery3 thq-section-padding">
      <div className="gallery2-max-width thq-section-max-width">
        <div className="gallery2-section-title">
          <h2 className="gallery2-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery2-text3">Our Services Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery2-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery2-text4">
                  Explore our AI-powered digital marketing solutions including
                  social media post generation, logo creation, video post
                  generation, and the use of AI technology to enhance marketing
                  strategies.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery2-content">
          <div className="gallery2-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery2-image1 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery2-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery2-image2 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery2-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery2-image31 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery2-container4">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery2-image32 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery2.defaultProps = {
  heading1: undefined,
  content1: undefined,
  image4Alt: 'AI Technology in Marketing',
  image1Alt: 'Social Media Post Generation',
  image4Src:
    'https://images.unsplash.com/photo-1578852612716-854e527abf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4ODczOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Logo Creation',
  image3Alt: 'Video Post Generation',
  image1Src:
    'https://images.unsplash.com/photo-1695653422967-40348437b8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4ODc0MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4ODc0MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery2.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image4Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
}

export default Gallery2
