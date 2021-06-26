import React from 'react'
import styled from 'styled-components'

import withToolbar from '../../../utils/hoc/withToolbar'
import Checkbox from '../../atoms/checkbox'

const CheckboxToolbar = withToolbar(Checkbox)
const mockData = {
  id: 4,
  name: 'checkbox',
  label: 'Some Label',
  required: true,
}

const Row = styled('div')({
  display: 'inline',
})

const CheckboxModule = () => {
  const { id, name, label, required } = mockData
  return (
    <Row>
      <label>{label}</label>
      <CheckboxToolbar name={name} id={id} required={required} />
    </Row>
  )
}

export default CheckboxModule
