import React from 'react'
import styled from 'styled-components'

import Toolbar from '../../components/molecules/toolbar'

const Wrapper = styled('div')({
  position: 'relative',
})

const PositionWrapper = styled('div')({
  position: 'absolute',
  right: '-50px',
  top: '-40px',
})

const withToolbar = Component => props => (
  <Wrapper>
    <PositionWrapper>
      <Toolbar />
    </PositionWrapper>
    <Component {...props} />
  </Wrapper>
)
export default withToolbar
