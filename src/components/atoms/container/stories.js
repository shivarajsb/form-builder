/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'

import withToolbar from '../../../utils/hoc/withToolbar'

import Droppable from '.'

storiesOf('Atoms/Droppable', module)
  .add('Droppable', () => <Droppable onHandleDrop={e => console.log(e)} />)
  .add('With Test Droppable Item', () => {
    const DroppableModule = withToolbar(Droppable)
    return (
      <div>
        <div style={{ padding: '50px', backgroundColor: 'blue' }}>
          <DroppableModule onHandleDrop={e => console.log(e)} />
        </div>
      </div>
    )
  })
  .add('With Toolbar', () => {
    const DroppableModule = withToolbar(Droppable)
    return <DroppableModule />
  })
