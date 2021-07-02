/* eslint-disable no-debugger */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../../atoms/modal'
import DividerModal from '../ModalContent/DividerModal'
import InputModal from '../ModalContent/InputModal'
import TextModal from '../ModalContent/TextModal'

const mapper = {
  input: InputModal,
  text: TextModal,
  divider: DividerModal,
}

const ModalForm = ({ selected, handleSubmit, open, handleClose }) => {
  // eslint-disable-next-line prettier/prettier
  const Component = mapper[selected && selected.type]
  return (
    <Modal open={open} handleClose={handleClose}>
      {Component && (
        <Component handleSubmitForm={handleSubmit} values={selected && selected.meta} />
      )}
    </Modal>
  )
}

ModalForm.propTypes = {
  selected: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ModalForm
