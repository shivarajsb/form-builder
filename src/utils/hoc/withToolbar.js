/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

import Toolbar from '../../components/molecules/toolbar'

const Wrapper = styled('div')({
  position: 'relative',
})

const PositionWrapper = styled('div')({
  position: 'absolute',
  right: '-10px',
  top: '-40px',
})

const withToolbar = Component => props => {
  const handleUserAction = action => {
    const { handleAction, id } = props
    handleAction({ action, id })
  }
  return (
    <Wrapper>
      <PositionWrapper>
        <Toolbar
          onDelete={() => handleUserAction('delete')}
          onDrag={() => handleUserAction('drag')}
          onEdit={() => handleUserAction('edit')}
          onDuplicate={() => handleUserAction('duplicate')}
        />
      </PositionWrapper>
      <Component {...props} />
    </Wrapper>
  )
}
export default withToolbar
