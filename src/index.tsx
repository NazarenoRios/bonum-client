import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'

// google auth
import { GoogleOAuthProvider } from '@react-oauth/google'

// chakra ui
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './utils/chakraui'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>,
)
