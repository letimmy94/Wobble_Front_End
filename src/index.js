import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import HomePage from './HomePage/HomePage'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('wobble-root')
)

registerServiceWorker()
