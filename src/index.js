import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'regenerator-runtime/runtime'
import './index.css'

import App from './App'
import store from './components/redux-utils/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
