import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme,  } from "@chakra-ui/react";


const {Button} = chakraTheme.components
const theme = extendBaseTheme({
  components: {
    Button
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
