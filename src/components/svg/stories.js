import { storiesOf } from '@storybook/react'
import React from 'react'

import withHover from '../../utils/hoc/withHover'

import Delete from './delete'
import Drag from './drag'
import Duplicate from './duplicate'
import Edit from './edit'

const HoverableSVG = withHover(Edit)

storiesOf('Styling/SVG Components', module)
  .add('Edit', () => <Edit />)
  .add('Drag', () => <Drag />)
  .add('Duplicate', () => <Duplicate />)
  .add('Delete', () => <Delete />)
  .add('With With Hover', () => <HoverableSVG />)
