import React from 'react'
import styled from 'styled-components'

import FormElements from '../../organisms/FormElements'
import Sidebar from '../../organisms/Sidebar'

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
      <FormElements />
    </GridItem>
  </GridContainer>
)
export default FormBuilder
