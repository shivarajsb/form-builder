import { storiesOf } from '@storybook/react'
import React from 'react'

import Text from '.'

storiesOf('Atoms/Text', module).add('Text', () => <Text label="Hello World" />)
