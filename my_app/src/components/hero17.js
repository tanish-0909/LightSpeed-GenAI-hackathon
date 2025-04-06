import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className={`hero17-header78 ${props.rootClassName} `}>
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text5">
                  AI-Powered Digital Marketing Solutions
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text7">
                  Empower your business with our cutting-edge AI technology for
                  digital marketing. Generate posts, videos, logos, business
                  cards, and more with ease.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6">Get Started</span>
                </Fragment>
              )}
            </span>
          </button>
          <Link to="/about" className="hero17-button2 thq-button-outline">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text8">Learn More</span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                }}
              />
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image1Alt: 'AI-Powered Digital Marketing Solutions',
  image3Alt: 'Digital Marketing Strategy',
  image7Alt: 'AI Business Card Generator',
  image10Alt: 'Digital Marketing Success',
  image10Src:
    'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1598826867442-9ef9e2527b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'AI Video Post Generator',
  image9Src:
    'https://images.unsplash.com/photo-1588064643233-49210b27b82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'AI Technology Illustration',
  heading1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1504507926084-34cf0b939964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  image11Alt: 'AI Technology in Marketing',
  image6Alt: 'AI Logo Generator',
  image3Src:
    'https://images.unsplash.com/photo-1524673360092-e07b7ae58845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1707146741016-89fcc6bd6994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'AI Analytics Reports',
  rootClassName: '',
  image8Src:
    'https://images.unsplash.com/photo-1543286386-2e659306cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1712246754649-119c1cef4a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Personalized AI Email Marketing',
  image4Alt: 'AI Post Generator',
  image11Src:
    'https://images.unsplash.com/photo-1684976894741-b89706ef32d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mzg4MDU0NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Alt: 'Digital Marketing Firm',
  content1: undefined,
  action2: undefined,
}

Hero17.propTypes = {
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.element,
  image7Src: PropTypes.string,
  action1: PropTypes.element,
  image11Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image5Src: PropTypes.string,
  image8Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image8Src: PropTypes.string,
  image4Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image12Alt: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
}

export default Hero17
