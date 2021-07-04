import { storiesOf } from '@storybook/react'
import React from 'react'

import ContainerModule from '.'

const data = {
  id: '2',
  displayType: 'flex',
  childElements: [
    {
      position: 1,
      type: 'input',
      meta: {
        id: 1,
        label: 'Hello World',
        name: 'name',
        required: true,
        min: 4,
        max: 100,
        placeholder: 'Whats up Dork?',
      },
    },
  ],
}

storiesOf('Molecules/ContainerModule', module)
  .add('ContainerModule', () => <ContainerModule />)
  .add('With Display Flex', () => <ContainerModule {...data} />)
