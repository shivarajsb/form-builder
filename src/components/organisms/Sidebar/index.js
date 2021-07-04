import React from 'react'
import styled from 'styled-components'

import { DragButton } from '../../atoms/button'
import Typography from '../../atoms/typography'

const ComponentsGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '>*': {
    margin: '5px',
  },
})

const Wrapper = styled('div')({
  backgroundColor: '#197AFF',
  height: '95vh',
  padding: '20px',
  '>*': {
    marginTop: '40px',
  },
})
const Sidebar = () => (
  <Wrapper>
    <div>
      <Typography bold fontSize="m" color="white">
        Cell Layout
      </Typography>
      <ComponentsGroup>
        <DragButton dashed variant="primary" type="container">
          Container
        </DragButton>
      </ComponentsGroup>
    </div>
    <div>
      <Typography bold fontSize="m" color="white">
        Form Components
      </Typography>
      <ComponentsGroup>
        <DragButton dashed variant="primary" id="input" type="input">
          Input
        </DragButton>
        <DragButton dashed variant="primary" type="checkbox">
          Checkbox
        </DragButton>
        <DragButton dashed variant="primary" type="upload">
          File Uploader
        </DragButton>
        <DragButton dashed variant="primary" type="text">
          Text
        </DragButton>
        <DragButton dashed variant="primary" type="divider">
          Divider
        </DragButton>
      </ComponentsGroup>
    </div>
  </Wrapper>
)

export default Sidebar
