import { storiesOf } from '@storybook/react'
import React from 'react'

import Input from '.'

storiesOf('Atoms/Input', module).add('Default', () => (
  <div style={{ backgroundColor: '#ffffff   ', padding: '30px' }}>
    <Input placeholder="Hello World" />
  </div>
))
