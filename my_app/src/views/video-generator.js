import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import CTA2 from '../components/cta2'
import './image-generator.css'

const VideoGenerator = (props) => {
  return (
    <div className="image-generator-container">
      <Helmet>
        <title>Video Post Generator - Extroverted Honest Capybara</title>
        <meta
          property="og:title"
          content="Video Post Generator - Extroverted Honest Capybara"
        />
      </Helmet>
      <Gallery2
        content1={
          <Fragment>
            <span className="image-generator-text10">
            Bring your stories to life with AI-powered video generation. 
            Just share your idea, and we’ll turn it into a stunning, ready-to-share 
            video—complete with visuals, music, and narration. Perfect for pitches, promos, reels, or resumes. 
            No editing skills? No problem. Just type, and let the magic roll.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text11">
              Create a Video
            </span>
          </Fragment>
        }
      ></Gallery2>
      <CTA2
        action1={
          <Fragment>
            <span className="image-generator-text12">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="image-generator-text13">
              <span>
              Tell us what your video is about, the tone you want, and 
              any key visuals or text—our AI will bring it to life!"
              </span>
              <br></br>
              <span>
                (e.g. &quot;I want a 60-second promo video for my new fitness coaching 
                program. It should be energetic and motivational with upbeat music. 
                Show clips of people working out, healthy meals, and my logo at the end. 
                Include the text: 'Join the 30-Day Fit Challenge: Start Today!' 
                Use bold fonts and bright colors&quot;)
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="image-generator-text18">
              Have questions? Contact us for a personalized consultation.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="image-generator-text19">AI Video Post Generator</span>
          </Fragment>
        }
      ></CTA2>
    </div>
  )
}

export default VideoGenerator

import React, { useState } from 'react';
import aivideoapi from '@api/aivideoapi';

const AIVideoGenerator = () => {
  const [promptText, setPromptText] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const generateVideo = () => {
    setIsLoading(true);
    setStatusMessage('Authenticating and sending request...');

    // Authenticate API
    aivideoapi.auth('10c8d6e059a434f72a6e9b0482d2c09e4');

    // Send generation request
    aivideoapi.generate_by_text_runway_generate_text_post({
      text_prompt: promptText,
      model: 'gen3',
      width: 1080,
      height: 1920,
      motion: 5,
      seed: 0,
      time: 10
    })
      .then(({ data }) => {
        const uuid = data.uuid;
        setStatusMessage('Request queued. Checking status...');
        pollStatus(uuid);
      })
      .catch((err) => {
        console.error('Generation Error:', err);
        setStatusMessage('Failed to generate video.');
        setIsLoading(false);
      });
  };

  const pollStatus = (uuid) => {
    const interval = setInterval(() => {
      aivideoapi.get_task_status_runway_status_get({ uuid })
        .then(({ data }) => {
          console.log('Polling Status:', data);
          if (data.status === 'success' && data.url) {
            clearInterval(interval);
            setVideoUrl(data.url);
            setIsLoading(false);
            setStatusMessage('Video is ready!');
          }
        })
        .catch((err) => {
          console.error('Polling Error:', err);
          clearInterval(interval);
          setIsLoading(false);
          setStatusMessage('Error checking status.');
        });
    }, 3000); // Poll every 3 seconds
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>AI Video Generator</h2>
      <input
        type="text"
        placeholder="Enter your video prompt"
        value={promptText}
        onChange={(e) => setPromptText(e.target.value)}
        style={{ width: '300px', padding: '8px' }}
      />
      <button
        onClick={generateVideo}
        disabled={isLoading || !promptText}
        style={{ marginLeft: '10px', padding: '8px 16px' }}
      >
        {isLoading ? 'Generating...' : 'Generate Video'}
      </button>

      <p>{statusMessage}</p>

      {videoUrl && (
        <div style={{ marginTop: '20px' }}>
          <video controls width="360" height="640" autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              Download Video
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default AIVideoGenerator;