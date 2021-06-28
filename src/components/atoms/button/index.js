/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const Button = styled('button')({
  backgroundColor: ({ variant }) => (variant === 'primary' ? '#197AFF' : '#ffffff'),
  borderRadius: '10em',
  padding: '12px',
  color: ({ variant }) => (variant === 'primary' ? 'white' : '#197AFF'),
  fontSize: '16px',
  fontWeight: 'bold',
  border: ({ variant }) => `${variant === 'primary' ? '1px solid white' : '1px solid #e8e8e8'}`,
  borderStyle: ({ dashed }) => (dashed ? 'dashed' : null),
  ':hover': {
    filter: 'contrast(0.8)',
  },
})

export default Button

export const DragButton = ({ children, type, ...other }) => {
  const buttonRef = useRef()
  useEffect(() => {
    const button = buttonRef.current
    button.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', JSON.stringify({ type, id: null }))
    })
    button.addEventListener('drag', e => {
      e.preventDefault()
      e.dataTransfer.setData('text/plain', e.currentTarget.type)
    })
  }, [])
  return (
    <Button {...other} ref={buttonRef} draggable>
      {children}
    </Button>
  )
}

DragButton.propTypes = {
  children: Proptypes.any.isRequired,
  type: Proptypes.string.isRequired,
}
