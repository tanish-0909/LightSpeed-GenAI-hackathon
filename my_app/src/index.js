import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LaunchpadProPage from './views/launchpad-pro';
import ImageGenerator from './views/image-generator'
import LogoGenerator from './views/logo-generator'
import VideoGenerator from './views/video-generator'
import BusinessCardGenerator from './views/business-card-generator'
import EmailAutomation from './views/email-automation'
import WebsiteGenerator from './views/website-generator'
import Analyticspage from './views/analyticspage'
import About from './views/about'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LaunchpadProPage} exact path="/launchpad-pro" />  
        <Route component={ImageGenerator} exact path="/image-generator" />
        <Route component={LogoGenerator} exact path="/logo-generator" />
        <Route component={VideoGenerator} exact path="/video-generator" />
        <Route component={BusinessCardGenerator} exact path="/business-card-generator" />
        <Route component={EmailAutomation} exact path="/email-automation" />
        <Route component={WebsiteGenerator} exact path="/website-generator" />
        <Route component={Analyticspage} exact path="/analyticspage" />
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
