import { storiesOf } from '@storybook/react'
import React from 'react'

import TextModal from '.'

storiesOf('Molecules/TextModal').add('TextModal', () => (
  <TextModal values={{ text: 'Shivaraj', size: 'l' }} />
))
