import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DropzoneBase = styled('div').attrs({ draggable: true })({
  height: '5px',
  backgroundColor: '#fefefe',
  borderRadius: '5px',
  border: '1px solid #e8e8e8',
  marginBottom: '30px',
})
const Dropzone = ({ onItemDrop, ...others }) => {
  const dropzoneRef = useRef()
  useEffect(() => {
    const dropzone = dropzoneRef.current
    dropzone.addEventListener('drop', e => {
      e.preventDefault()
      e.target.style.transition = '0.3s'
      e.target.style.background = ''
      e.target.style.height = ''
      const data = JSON.parse(e.dataTransfer.getData('text'))
      const modified = { ...data, target: e.target.id }
      onItemDrop(modified)
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
  return <DropzoneBase ref={dropzoneRef} {...others} />
}

Dropzone.propTypes = {
  onItemDrop: PropTypes.func.isRequired,
}
export default Dropzone
