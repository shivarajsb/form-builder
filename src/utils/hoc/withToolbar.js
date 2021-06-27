/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import Toolbar from '../../components/molecules/toolbar'

const Wrapper = styled('div')({
  position: 'relative',
  padding: '20px 10px 20px 10px',
  backgroundColor: 'white',
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
  const toolbarRef = useRef()
  useEffect(() => {
    const toolbar = toolbarRef.current
    toolbar.addEventListener('drag', e => {
      e.preventDefault()
    })
  }, [])
  return (
    <Wrapper draggable ref={toolbarRef}>
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
