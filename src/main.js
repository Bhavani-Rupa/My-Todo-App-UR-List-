import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

//
// Entry point of the application
// - Finds the <div id="root"></div> in index.html
// - Renders the React App inside it
// - StrictMode adds extra checks in development to catch common issues
//
createRoot(document.getElementById('root')).render(
  React.createElement(StrictMode, null,
    React.createElement(App, null)
  )
)
