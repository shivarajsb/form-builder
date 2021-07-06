import { storiesOf } from '@storybook/react'
import React from 'react'

import SpaceAround from '.'

storiesOf('Atoms/SpaceAround', module).add('Space-Around', () => (
  <SpaceAround>
    <span>Hello</span>
    <span>World</span>
  </SpaceAround>
))
