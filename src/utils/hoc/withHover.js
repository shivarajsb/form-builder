import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('span')({
  display: 'inline-block',
  transition: '0.2s',
  cursor: 'pointer',
  marginLeft: '10px',
  ':hover': {
    transform: 'scale(1.2)',
    transition: '0.3s',
  },
})

const withHover = (Component, fn) => props => (
  <Wrapper onClick={fn}>
    <Component {...props} />
  </Wrapper>
)

export default withHover
