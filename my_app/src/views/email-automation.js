import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Registeremail from '../components/registeremail'
import Numemails from '../components/numemails'
import './email.css'

const EmailAutomation = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Showy Self Reliant Rook</title>
        <meta property="og:title" content="Showy Self Reliant Rook" />
      </Helmet>
      <Registeremail
        action1={
          <Fragment>
            <span className="home-text1">Sign In</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text2">
              Are you looking to enhance customer engagement and drive better
              results for your business? Our personalized email automation
              feature is designed to help you connect with your consumer base in
              a professional and impactful way.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text3">
              plz Sign up for our newsletter to receive updates and promotions
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text4">AI Email Automation</span>
          </Fragment>
        }
      ></Registeremail>
      <Numemails
        heading1={
          <Fragment>
            <span className="home-text5">
              Your Emails are two simple clicks away
            </span>
          </Fragment>
        }
      ></Numemails>
    </div>
  )
}

export default EmailAutomation

'use client';

import React, { useState } from 'react';
import Together from 'together-ai';

const together = new Together({
  apiKey: 'YOUR_API_KEY_HERE', // Replace with your real Together API key
});

const EmailGenerator = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [interest, setInterest] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    setLoading(true);
    setEmailContent('');

    const prompt = Write a personalized marketing email for a customer named ${name}, who is interested in ${interest}, introducing our new product: ${product}. Make it engaging, friendly, and persuasive.;

    try {
      const response = await together.completions.create({
        model: 'mistralai/Mixtral-8x7B-v0.1',
        prompt,
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        repetition_penalty: 1,
        stop: [],
        stream: true,
      });

      for await (const token of response) {
        setEmailContent((prev) => prev + (token.choices[0]?.delta?.content || ''));
      }
    } catch (err) {
      console.error('Error generating email:', err);
      setEmailContent('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Personalized Marketing Email Generator</h2>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Interest (e.g. fitness, tech, travel)"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={generateEmail}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading || !name || !product || !interest}
        >
          {loading ? 'Generating...' : 'Generate Email'}
        </button>
      </div>

      {emailContent && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Generated Email:</h3>
          <pre className="whitespace-pre-wrap">{emailContent}</pre>
        </div>
      )}
    </div>
  );
};

export default EmailGenerator;