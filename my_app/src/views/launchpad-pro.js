import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import CTA2 from '../components/cta2'
import CTA21 from '../components/cta21'
import CTA22 from '../components/cta22'
import CTA23 from '../components/cta23'
import CTA24 from '../components/cta24'
import './page.css'

const LaunchpadProPage = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Showy Self Reliant Rook</title>
        <meta property="og:title" content="Page - Showy Self Reliant Rook" />
      </Helmet>
      <Gallery2
        content1={
          <Fragment>
            <span className="page-text10">
              <span>
                From post generation to website development, all in one click!!
              </span>
              <br></br>
              <span>Let&apos;s make you rich!!</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="page-text14">Start Up Launch Pad</span>
          </Fragment>
        }
      ></Gallery2>
      <CTA2
        content1={
          <Fragment>
            <span className="page-text15">Name</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="page-text16">Tell us about your Startup</span>
          </Fragment>
        }
        rootClassName="cta2root-class-name"
      ></CTA2>
      <CTA21
        content1={
          <Fragment>
            <span className="page-text17">Product details</span>
          </Fragment>
        }
        rootClassName="cta21root-class-name"
      ></CTA21>
      <CTA22
        content1={
          <Fragment>
            <span className="page-text18">Color scheme</span>
          </Fragment>
        }
        rootClassName="cta22root-class-name"
      ></CTA22>
      <CTA23
        content1={
          <Fragment>
            <span className="page-text19">Co founder details</span>
          </Fragment>
        }
        rootClassName="cta23root-class-name"
      ></CTA23>
      <CTA24
        action1={
          <Fragment>
            <span className="page-text20">Sign Up Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="page-text21">
              Any additional features for website, or an overall theme....
            </span>
          </Fragment>
        }
      ></CTA24>
    </div>
  )
}

export default LaunchpadProPage