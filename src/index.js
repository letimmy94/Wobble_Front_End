import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import HomePage from './HomePage/HomePage.js'

ReactDOM.render(<HomePage />, document.getElementById('root'))
registerServiceWorker()
