import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '../../components/atoms/button'
import Input from '../../components/atoms/Input'

import withHover from './withHover'
import withToolbar from './withToolbar'

const ToolbarInput = withToolbar(Input)
const ButtonMod = withHover(Button)
storiesOf('Utils', module)
  .add('withToolbar', () => (
    <div style={{ padding: '30px' }}>
      <ToolbarInput />
    </div>
  ))
  .add('withHover', () => (
    <div style={{ padding: '30px' }}>
      <ButtonMod>Hello World</ButtonMod>
    </div>
  ))
