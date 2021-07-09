/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import SpaceBetween from '../../components/atoms/space-between'
import Typography from '../../components/atoms/typography'
import Toolbar from '../../components/molecules/toolbar'

const Wrapper = styled('div')({
  position: 'relative',
  padding: '20px 10px 20px 10px',
  backgroundColor: 'white',
  border: '1px solid #e8e8e8',
  borderRadius: '20px',
  marginTop: '20px',
})
const withToolbar = (Component, type, label) => props => {
  const handleUserAction = action => {
    const { handleAction, id } = props
    handleAction({ action, id })
  }
  const toolbarRef = useRef()
  const { id } = props
  useEffect(() => {
    const toolbar = toolbarRef.current
    toolbar.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', JSON.stringify({ type, id }))
    })
    toolbar.addEventListener('drag', e => {
      e.preventDefault()
    })
  }, [])
  return (
    <Wrapper draggable ref={toolbarRef}>
      <SpaceBetween>
        <Typography>{label}</Typography>
        <Toolbar
          onDelete={() => handleUserAction('delete')}
          onEdit={() => handleUserAction('edit')}
          onDuplicate={() => handleUserAction('duplicate')}
        />
      </SpaceBetween>
      <Component {...props} />
    </Wrapper>
  )
}
export default withToolbar
