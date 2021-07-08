/* @flow */
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import FormBuilder from './components/templates/FormBuilder'
import Viewer from './components/templates/Viewer'
import { GlobalStyle } from './utils/styles/globalStyles'

const App = () => (
  <div>
    <GlobalStyle />
    <Switch>
      <Route path="/viewer/:id" component={Viewer} />
      <Route path="/forms" component={Viewer} />
      <Route path="/" component={FormBuilder} />
    </Switch>
  </div>
)

export default App
