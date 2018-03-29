import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
import './index.css'
import HomePage from './HomePage/HomePage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<HomePage />, document.getElementById('root'))
=======

import App from './App'
import HomePage from './HomePage/HomePage'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
>>>>>>> 7931bff90f5e2bca74c613cad1bf8a71a19a1e54
registerServiceWorker()
