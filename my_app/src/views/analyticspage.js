import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import CTA11 from '../components/cta11'
import './analyticspage.css'

const Analyticspage = (props) => {
  return (
    <div className="analyticspage-container">
      <Helmet>
        <title>analyticspage - Showy Self Reliant Rook</title>
        <meta
          property="og:title"
          content="analyticspage - Showy Self Reliant Rook"
        />
      </Helmet>
      <CTA11
        heading1={
          <Fragment>
            <span className="analyticspage-text17">
              Re - Master Your Analytics
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="analyticspage-text18">
              <span className="analyticspage-text19">
                Upload Your Google Analytics Report for Expert AI Analysis
              </span>
              <br></br>
              <span>
                Make sense of your data like never before! Simply upload your
                Google Analytics report, and our powerful AI engine will:
              </span>
              <br></br>
              <br></br>
              <span>
                🔍
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="analyticspage-text25">Analyze Key Metrics</span>
              <span>
                : Dive deep into user behavior, traffic sources, bounce rates,
                session durations, and conversion paths to uncover what truly
                drives your performance.
              </span>
              <br></br>
              <br></br>
              <span>🧠</span>
              <span className="analyticspage-text30">
                {' '}
                Generate AI-Powered Summaries
              </span>
              <span>
                : Get concise, easy-to-understand summaries of complex data
                trends—no need to be a data expert.
              </span>
              <br></br>
              <br></br>
              <span>
                📈
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="analyticspage-text35">
                Visualize Your Insights
              </span>
              <span>
                : Transform raw data into stunning, interactive charts and
                graphs for quick understanding and presentations.
              </span>
              <br></br>
              <br></br>
              <span>🎯</span>
              <span className="analyticspage-text40">
                {' '}
                Actionable Recommendations
              </span>
              <span>
                : Receive personalized, data-backed suggestions and next-step
                implementations to boost your site’s effectiveness, increase
                engagement, and drive conversions.
              </span>
              <br></br>
              <br></br>
              <span>
                Whether you&apos;re a marketer, product manager, or business
                owner, this feature equips you with strategic clarity—powered by
                AI.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="cta11root-class-name"
      ></CTA11>
      <span className="analyticspage-text47">Coming Soon....</span>
    </div>
  )
}

export default Analyticspage