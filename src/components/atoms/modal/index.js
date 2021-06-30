/* eslint-disable react/forbid-prop-types */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Close from '../svg/close'

export const Background = styled('div')({
  width: '100%',
  height: '100%',
  background: 'rgba(220,220,220,0.8)',
  transition: '0.3s',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 5,
})

const ModalWrapper = styled('div')({
  minWidth: '800px',
  minHeight: '500px',
  backgroundColor: 'white',
  zIndex: 10,
  borderRadius: '10px',
  padding: '15px',
  transition: '0.3s',
  border: '1px solid #C4C4C4',
})
const RowReverse = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
})
const IconWrapper = styled('span')({
  cursor: 'pointer',
})

const Modal = ({ open, children, handleClose }) => (
  <Background style={{ display: open ? 'flex' : 'none' }}>
    <ModalWrapper>
      <RowReverse>
        <IconWrapper onClick={handleClose}>
          <Close />
        </IconWrapper>
      </RowReverse>
      {children}
    </ModalWrapper>
  </Background>
)
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default Modal
