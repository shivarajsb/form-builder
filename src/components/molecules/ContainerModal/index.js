/* eslint-disable react/forbid-prop-types */
import React from 'react'
import Select from 'react-select/src/Select'
import PropTypes from 'prop-types'

const options = [
  {
    label: 'Block',
    value: 'block',
  },
  {
    label: 'Flex',
    value: 'flex',
  },
]
const ContainerModal = ({ values, handleSubmitForm }) => (
  <div>
    <form>
      <label>Type</label>
      <Select options={options} placeholder="Display Type" />
    </form>
  </div>
)

ContainerModal.propTypes = {
  values: PropTypes.any.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
}

export default ContainerModal
