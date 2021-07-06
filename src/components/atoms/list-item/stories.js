import { storiesOf } from '@storybook/react'
import React from 'react'

import ListItem from '.'

storiesOf('Atoms/ListItem', module)
  .add('Unselected List Item', () => <ListItem label="Hello Wold" />)
  .add('Selected List Item', () => <ListItem selected label="Hello World again" />)
