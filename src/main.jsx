import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './Store/Store.js'
import { Provider } from 'react-redux'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>,
)
