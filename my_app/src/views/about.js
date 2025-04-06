import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Extroverted Honest Capybara</title>
        <meta
          property="og:title"
          content="About - Extroverted Honest Capybara"
        />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="about-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13">Book A Consultation</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-text15">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-text16">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text18">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text19">Contact Us</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="#Features24"
        rootClassName="navbar8root-class-name2"
        page1Description={
          <Fragment>
            <span className="about-text20">
              Welcome to our AI Digital Marketing Firm
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-text21">
              Explore our AI-powered digital marketing services
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-text22">
              Learn more about our team and mission
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-text23">
              Get in touch with us for a consultation
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text24">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text25">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text26">
              Choose from different pricing plans and get access to tools for
              creating engaging content effortlessly
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text27">
              AI-Powered Digital Marketing Solutions
            </span>
          </Fragment>
        }
        rootClassName="hero8root-class-name"
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text28">AI-Powered Solutions</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text29">Expertise in AI Technology</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text30">Business Analytics Review</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text31">Custom Pricing Plans</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text32">
              Our digital marketing solutions are driven by cutting-edge AI
              technology.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text33">
              Experience the power of AI in transforming your marketing
              strategies.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text34">Why Choose Us?</span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text35">
              Revolutionize your digital marketing with AI-driven solutions.
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text36">
              Harness the potential of AI for your marketing needs.
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text37">
              In-depth analysis of your business data for informed
              decision-making.
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text38">
              Tailored pricing plans to suit your business requirements.
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text39">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features1
        sectionTitle={
          <Fragment>
            <span className="about-text40">Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text41">Post Generation</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text42">Video Creation</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text43">Logo and Business Card Design</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text44">
              <span>Transforming Your Marketing Efforts</span>
              <br></br>
              <span>
                Explore the powerful AI-driven features that can elevate your
                digital marketing strategies.
              </span>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text48">
              Effortlessly create engaging and relevant social media posts with
              our AI-powered post generation tool.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text49">
              Generate stunning videos for your marketing campaigns in minutes
              using our advanced video creation AI technology.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text50">
              Design professional logos and business cards that represent your
              brand identity accurately with our AI design tools.
            </span>
          </Fragment>
        }
      ></Features1>
      <Team1
        member1={
          <Fragment>
            <span className="about-text51">Rajavi Gujarathi</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text52">Tanish Chudiwal</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text53">Hardik Sawant</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text54">Mahima Jilla</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text55">Join Our Team Today!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text56">Meet Our Team</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text57">CEO &amp; Co-Founder</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text58">COO &amp; Co-Founder</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text59">CTO &amp; Co-Founder </span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text60">CMO &amp; Co-Founder</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text61">Lead Web Developer</span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text62">AI expert</span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text63">AI expert</span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text64">
              <span>Marketing &amp;</span>
              <br></br>
              <span> AI expert</span>
            </span>
          </Fragment>
        }
      ></Team1>
      <Footer1
        link1={
          <Fragment>
            <span className="about-text68">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text69">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text70">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text71">Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text72">Logo Generator</span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="about-text73">Video Generator</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-text74">Post Generator</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-text75">Business Card Generator</span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="about-text76">Pricing Plans</span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="about-text77">Consultation</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text78">Subscribe to Newsletter</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text79">
              © 2023 AI Digital Marketing Firm. All rights reserved.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text80">Designed by DigiTally</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text81">/terms-and-conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text82">/cookie-policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text83">/privacy-policy</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="about-text84">Company</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="about-text85">Services</span>
          </Fragment>
        }
        socialLinkTitleCategory={
          <Fragment>
            <span className="about-text86">Connect with Us</span>
          </Fragment>
        }
      ></Footer1>
    </div>
  )
}

export default About
