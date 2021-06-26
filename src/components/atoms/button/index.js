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
  border: '1px solid white',
  borderStyle: ({ dashed }) => (dashed ? 'dashed' : null),
})

export default Button
export const DragButton = ({ children, ...other }) => {
  const buttonRef = useRef()
  useEffect(() => {
    const button = buttonRef.current
    button.addEventListener('drag', e => {
      e.preventDefault()
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
}
