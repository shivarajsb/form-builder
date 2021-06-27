import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/typography'
import CheckboxModule from '../../molecules/CheckboxModule'
import DividerModule from '../../molecules/DividerModule'
import InputModule from '../../molecules/InputModule'
import TextModule from '../../molecules/TextModule'

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})
const Wrapper = styled('div')({
  width: '90%',
})
const Dropzone = () => (
  <Container>
    <Wrapper>
      <Typography fontSize="l" bold textAlign="center" color="grey">
        Drop and Create
      </Typography>
      <InputModule />
      <CheckboxModule />
      <DividerModule />
      <TextModule />
    </Wrapper>
  </Container>
)
export default Dropzone
