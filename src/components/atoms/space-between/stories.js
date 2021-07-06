import { storiesOf } from '@storybook/react'
import React from 'react'

import SpaceBetween from '.'

storiesOf('Atoms/SpaceBetween', module).add('SpaceBetween', () => (
  <SpaceBetween>
    <span>Hello</span>
    <span>World</span>
  </SpaceBetween>
))
