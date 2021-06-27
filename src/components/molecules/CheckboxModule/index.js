import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withToolbar from '../../../utils/hoc/withToolbar'
import Checkbox from '../../atoms/checkbox'

const CheckboxToolbar = withToolbar(Checkbox)
const Row = styled('div')({
  display: 'inline',
})

const CheckboxModule = ({ handleAction, data }) => {
  const { id, name, label, required } = data
  return (
    <Row>
      <label>{label}</label>
      <CheckboxToolbar name={name} id={id} required={required} handleAction={handleAction} />
    </Row>
  )
}

CheckboxModule.propTypes = {
  handleAction: PropTypes.func.isRequired,
  data: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
  }),
}

CheckboxModule.defaultProps = {
  data: {
    id: 1,
    name: 'checkbox',
    label: 'Checkbox Label',
    required: false,
  },
}

export default CheckboxModule
