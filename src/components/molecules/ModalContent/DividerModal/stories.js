/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'

import DividerModal from '.'

storiesOf('Molecules/DividerModal', module).add('DividerModal', () => (
  <DividerModal handleSubmitForm={e => console.log(e)} />
))
