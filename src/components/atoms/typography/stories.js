import { storiesOf } from '@storybook/react'
import React from 'react'

import Typography from '.'

storiesOf('Typography', module)
  .add('XL Typography', () => (
    <Typography fontSize="xl">Hello World this is Shivaraj Bakale</Typography>
  ))
  .add('L Typography', () => (
    <Typography fontSize="l">Hello World this is Shivaraj Bakale</Typography>
  ))
  .add('M Typography', () => (
    <Typography fontSize="m">Hello World this is Shivaraj Bakale</Typography>
  ))
  .add('S Typography', () => (
    <Typography fontSize="s">Hello World this is Shivaraj Bakale</Typography>
  ))
  .add('Bold Typography', () => (
    <Typography fontSize="m" bold>
      Hello World this is Shivaraj Bakale
    </Typography>
  ))
