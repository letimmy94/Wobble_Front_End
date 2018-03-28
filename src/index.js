import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import HomePage from './HomePage/HomePage'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <HomePage />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
