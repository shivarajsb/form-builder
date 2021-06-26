/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'

import Toolbar from '.'

const customFunction = () => {
  console.log('Clicked')
}

storiesOf('Toolbar', module).add('Default', () => (
  <Toolbar
    onDelete={customFunction}
    onDrag={customFunction}
    onDuplicate={customFunction}
    onEdit={customFunction}
  />
))
