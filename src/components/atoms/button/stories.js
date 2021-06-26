import { storiesOf } from '@storybook/react'
import React from 'react'

import Button, { DragButton } from '.'

storiesOf('Button', module)
  .add('Default', () => (
    <div style={{ backgroundColor: '#197AFF', padding: '30px' }}>
      <Button>Hello World</Button>
    </div>
  ))
  .add('Primary Button', () => (
    <div>
      <div style={{ backgroundColor: '#197AFF', padding: '30px' }}>
        <Button dashed variant="primary">
          Hello World
        </Button>
      </div>
    </div>
  ))
  .add('White Button', () => (
    <div>
      <div style={{ backgroundColor: '#197AFF', padding: '30px' }}>
        <Button dashed>Hello World</Button>
      </div>
    </div>
  ))
  .add('White Button White Background', () => (
    <div>
      <div style={{ backgroundColor: '#ffffff', padding: '30px' }}>
        <Button dashed>Hello World</Button>
      </div>
    </div>
  ))
  .add('Draggable Button', () => (
    <div>
      <div style={{ backgroundColor: '#197AFF', padding: '30px' }}>
        <DragButton>Hello World</DragButton>
      </div>
    </div>
  ))
