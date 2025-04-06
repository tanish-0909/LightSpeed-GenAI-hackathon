import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact14.css'

const Contact14 = (props) => {
  return (
    <div
      className={`contact14-contact20 thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact14-max-width thq-section-max-width">
        <div className="contact14-content1">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact14-contact-info1">
            <div className="contact14-content2">
              <h3 className="contact14-text10 thq-heading-3">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact14-text14">Contact Us</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact14-email thq-body-small">
              {props.email1 ?? (
                <Fragment>
                  <span className="contact14-text13">
                    info@aidigitalmarketingfirm.com
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact14-content3">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact14-contact-info2">
            <div className="contact14-content4">
              <h3 className="contact14-text11 thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="contact14-text15">Phone</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact14-phone thq-body-small">
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact14-text23">+91 9146330663</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact14-content5">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
          </svg>
          <div className="contact14-contact-info3">
            <div className="contact14-content6">
              <h3 className="contact14-text12 thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="contact14-text24">Office</span>
                  </Fragment>
                )}
              </h3>
            </div>
            <span className="contact14-address thq-body-small">
              {props.address1 ?? (
                <Fragment>
                  <span className="contact14-text16">
                    <span>Cauvery Hostel,</span>
                    <br></br>
                    <span>IIT Madras </span>
                    <br></br>
                    <span>Chennai 600036</span>
                    <br></br>
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

Contact14.defaultProps = {
  rootClassName: '',
  email1: undefined,
  heading1: undefined,
  heading3: undefined,
  address1: undefined,
  phone1: undefined,
  heading4: undefined,
}

Contact14.propTypes = {
  rootClassName: PropTypes.string,
  email1: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  address1: PropTypes.element,
  phone1: PropTypes.element,
  heading4: PropTypes.element,
}

export default Contact14
