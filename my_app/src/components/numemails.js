import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './numemails.css'

const Numemails = (props) => {
  return (
    <div className="numemails-container1 thq-section-padding">
      <div className="numemails-max-width thq-section-max-width">
        <div className="numemails-content">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="numemails-text2">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <div className="numemails-container2">
            <div className="numemails-row thq-flex-column">
              <div className="numemails-container3">
                <input
                  type="number"
                  placeholder="Number of Emails"
                  className="thq-input"
                />
              </div>
              <div className="numemails-container4">
                <input
                  type="text"
                  placeholder="important contents"
                  className="numemails-textinput2 thq-input"
                />
                <button type="button" name="Send" className="thq-button-filled">
                  <span>{props.text}</span>
                  Prop Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Numemails.defaultProps = {
  heading1: undefined,
  text: 'Send',
}

Numemails.propTypes = {
  heading1: PropTypes.element,
  text: PropTypes.string,
}

export default Numemails