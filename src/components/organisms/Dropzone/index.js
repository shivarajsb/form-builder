import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const DropzoneBase = styled('div').attrs({ draggable: true })({
  height: '3px',
  backgroundColor: '#fefefe',
  borderRadius: '5px',
  border: '1px solid #e8e8e8',
  marginBottom: '30px',
})
const Dropzone = props => {
  const dropzoneRef = useRef()
  useEffect(() => {
    const dropzone = dropzoneRef.current
    dropzone.addEventListener('drop', e => {
      e.target.style.transition = '0.3s'
      e.target.style.background = ''
      e.target.style.height = ''
    })
    dropzone.addEventListener('dragover', e => {
      e.preventDefault()
      e.target.style.transition = '0.3s'
      e.target.style.background = 'blue'
      e.target.style.height = '80px'
    })
    dropzone.addEventListener('dragleave', e => {
      e.preventDefault()
      e.target.style.transition = '0.3s'
      e.target.style.background = ''
      e.target.style.height = ''
    })
  }, [])
  return <DropzoneBase ref={dropzoneRef} {...props} />
}
export default Dropzone
