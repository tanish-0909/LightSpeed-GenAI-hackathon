import { Link } from 'react-router-dom';
import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Extroverted Honest Capybara</title>
        <meta property="og:title" content="Extroverted Honest Capybara" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Book A Consultation</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="#Features24"
        link3Url="/about"
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our AI Digital Marketing Firm
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore our AI-powered digital marketing services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our team and mission
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for a consultation
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text115">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Empower your business with our cutting-edge AI technology for
              digital marketing. Generate posts, videos, logos, business cards,
              and more with ease.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              <span>Postify</span>
              <br></br>
              <span className="home-text120">
                From Zero to Viral - in One Click
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="hero17root-class-name"
      ></Hero17>
      <CTA26
  action1={
    <div style={{ cursor: 'pointer' }}> {/* Add pointer cursor */}
      <Link 
        to="/launchpad-pro" 
        className="home-text122"
        style={{ textDecoration: 'none' }}  // Remove default link styling
      >
        <span className="home-text122">Get Started</span>
      </Link>
    </div>
        }
        content1={
          <Fragment>
            <span className="home-text123">
              <span>Have a start-up but don&apos;t know where to start?</span>
              <br></br>
              <span className="home-text126">
                Let our AI-powered tools revolutionize your digital marketing
                strategies and take your business to new heights.
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text127">Launchpad Pro</span>
          </Fragment>
        }
        rootClassName="cta26root-class-name"
      ></CTA26>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text128">AI Post Generator</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">AI Logo Generator</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text130">AI Video Post Generator</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text131">
              Automatically generate engaging and relevant social media posts
              using AI algorithms.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text132">
              Create professional logos for your brand with the help of AI
              technology.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text133">
              Generate AI-powered video posts for your social media channels
              effortlessly.
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text134">AI Business Card Generator</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text135">AI Email Automation</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text136">AI Website Generator</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text137">
              Create smart, stylish business cards instantly with the power of
              AI.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text138">
              Generate engaging and relevant content using AI technology.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text139">
              From idea to website in seconds. Let AI do the heavy lifting.
            </span>
          </Fragment>
        }
      ></Features25>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text140">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text141">
              Sit back and relax while our wizards handle your digital marketing
              needs...
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text142">Social Media Kit</span>
          </Fragment>
        }
        rootClassName="cta26root-class-name1"
      ></CTA26>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text143">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text144">
              <span>The Story Behind the Stats...</span>
              <br></br>
              <span>
                Have a strategic look and review your business analytics for
                smarter decisions
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <Link to="/analyticspage" className="home-text149">
              <span className="home-text149">Business Analytics Review</span>
            </Link>
          </Fragment>
        }
        rootClassName="cta26root-class-name2"
      ></CTA26>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text150">Silver Tier</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text151">Gold Tier</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text152">Platinum Tier</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text153">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text154">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text155">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text157">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text158">₹0/mo</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text159">₹79/mo</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text160">₹99/mo</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text161">Get started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text162">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text163">or ₹0 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text164">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text165">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text166">or ₹799 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text167">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text168">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text169">or ₹999 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text170">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text171">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text172">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text173">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text174">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text175">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text176">Social Media Kit</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text177">1 generated post p.m.</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text178">50 emails per month</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text179">Social Media Kit</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text180">3 generated posts p.m.</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text181">250 emails p.m.</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text182">
              AI logo and business card generator
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text183">Social Media Kit</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text184">8 generated posts p.m.</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text185">500 emails p.m.</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text186">
              AI logo and business card generator
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text187">3 marketing videos p.m.</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text188">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text189">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text190">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature32={
          <Fragment>
            <span className="home-text191">AI logo Generator</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text192">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text193">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text194">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text195">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature42={
          <Fragment>
            <span className="home-text196">1 marketing video p.m.</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text197">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text198">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text199">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text200">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text201">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature52={
          <Fragment>
            <span className="home-text202">AI website generator</span>
          </Fragment>
        }
        plan2Feature422={
          <Fragment>
            <span className="home-text203">Data Analytics</span>
          </Fragment>
        }
        plan3Feature521={
          <Fragment>
            <span className="home-text204">Data Analytics</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text205">
              Sign up for our AI Digital Marketing services
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text206">
              Generate AI-powered posts and videos
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text207">Design with AI</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text208">
              Track and analyze with AI analytics
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text209">
              Create an account and get access to our AI-powered tools for
              digital marketing tailored to your business needs.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text210">
              Utilize our AI post generator and video post generator to create
              engaging content for your audience effortlessly.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text211">
              Use our AI logo generator and business card generator to create
              professional branding materials in minutes.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text212">
              Get detailed insights into your digital marketing performance with
              AI analytics and personalized reports.
            </span>
          </Fragment>
        }
      ></Steps2>
      <ContactForm3
        action={
          <Fragment>
            <span className="home-text213">Submit</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text214">
              Kindly reach out to us incase of any queries.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text215">Get in touch with us</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text216">Contact us</span>
          </Fragment>
        }
        rootClassName="contact-form3root-class-name"
      ></ContactForm3>
      <Contact14
        email1={
          <Fragment>
            <span className="home-text217">info@digitally.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="home-text218">+91 9146330663</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text219">
              <span>Cauvery Hostel,</span>
              <br></br>
              <span>IIT Madras </span>
              <br></br>
              <span>Chennai 600036</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text226">Contact Us</span>
          </Fragment>
        }
        heading3={
          <Fragment>
            <span className="home-text227">Phone</span>
          </Fragment>
        }
        heading4={
          <Fragment>
            <span className="home-text228">Office</span>
          </Fragment>
        }
        rootClassName="contact14root-class-name"
      ></Contact14>
    </div>
  )
}

export default Home
