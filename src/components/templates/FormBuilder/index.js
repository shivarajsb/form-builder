import React from 'react'
import styled from 'styled-components'

import Button from '../../atoms/button'
import Typography from '../../atoms/typography'
import FormElements from '../../organisms/FormElements'
import Sidebar from '../../organisms/Sidebar'

const GridParent = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridColumnGap: '0px',
  gridRowGap: '0px',
  height: '100vh',
  width: '100vw',
})

const SidebarContainer = styled('div')({
  gridArea: '1/1/6/2',
})
const HeaderContainer = styled('div')({
  gridArea: '1 / 2 / 2 / 6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const BuilderContainer = styled('div')({
  gridArea: '2 / 2 / 5 / 6',
})

const FooterContainer = styled('div')({
  gridArea: '5 / 2 / 6 / 6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const FormBuilder = () => (
  <GridParent>
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
    <HeaderContainer>
      <Typography fontSize="l" bold textAlign="center">
        Drop and Create
      </Typography>
    </HeaderContainer>
    <BuilderContainer>
      <FormElements />
    </BuilderContainer>
    <FooterContainer>
      <Button>Save</Button>
    </FooterContainer>
  </GridParent>
)
export default FormBuilder
