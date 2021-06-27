import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/typography'
import FormElements from '../../organisms/FormElements'
import Sidebar from '../../organisms/Sidebar'

const Heading = styled('div')({
  margin: '20px 0px 80px 0px',
})

const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
})

const GridItem = styled('div')({
  backgroundColor: 'white',
})
const FormBuilder = () => (
  <GridContainer>
    <GridItem>
      <Sidebar />
    </GridItem>
    <GridItem>
      <Heading>
        <Typography fontSize="l" bold textAlign="center">
          Drop and Create
        </Typography>
      </Heading>
      <FormElements />
    </GridItem>
  </GridContainer>
)
export default FormBuilder
