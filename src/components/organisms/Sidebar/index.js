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
  backgroundColor: 'blue',
  height: '100vh',
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
        <DragButton dashed variant="primary">
          Table
        </DragButton>
      </ComponentsGroup>
    </div>
    <div>
      <Typography bold fontSize="m" color="white">
        Form Components
      </Typography>
      <ComponentsGroup>
        <DragButton dashed variant="primary">
          Input
        </DragButton>
        <DragButton dashed variant="primary">
          Checkbox
        </DragButton>
        <DragButton dashed variant="primary">
          File Uploader
        </DragButton>
        <DragButton dashed variant="primary">
          Text
        </DragButton>
        <DragButton dashed variant="primary">
          Divider
        </DragButton>
      </ComponentsGroup>
    </div>
  </Wrapper>
)

export default Sidebar
