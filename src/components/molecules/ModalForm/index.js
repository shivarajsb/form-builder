/* eslint-disable no-debugger */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Modal from '../../atoms/modal'
import DividerModal from '../ModalContent/DividerModal'
import InputModal from '../ModalContent/InputModal'
import TextModal from '../ModalContent/TextModal'
import CheckboxModal from '../ModalContent/CheckboxModal'
import FileUploadModal from '../FileUploadModal'
import { getComponentElements } from '../../redux-utils/selectors/component.selector'
import { getCurrentForm } from '../../redux-utils/selectors/form.selector'

const mapper = {
  input: InputModal,
  text: TextModal,
  divider: DividerModal,
  checkbox: CheckboxModal,
  upload: FileUploadModal,
}

const ModalForm = ({ selected, handleSubmit, open, handleClose }) => {
  const Component = mapper[selected && selected.type]
  const handleSubmitForm = e => {
    handleSubmit(e)
    handleClose()
  }
  const components = useSelector(getComponentElements)
  return (
    <Modal open={open} handleClose={handleClose}>
      {Component && (
        <Component
          handleSubmitForm={handleSubmitForm}
          values={selected && { ...selected.meta, id: selected.id }}
          components={components}
        />
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
