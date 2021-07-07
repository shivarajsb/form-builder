import { storiesOf } from '@storybook/react'
import React from 'react'

import Div from '.'

storiesOf('Atoms/Div', module).add('Div', () => (
  <div style={{ padding: '20px', backgroundColor: 'white' }}>
    <Div>
      <h1>hello World</h1>
    </Div>
  </div>
))
