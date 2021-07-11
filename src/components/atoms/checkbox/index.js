import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Typography from '../typography'

const CheckboxBase = styled.input.attrs({ type: 'checkbox' })({
  color: '#333333',
})

const Checkbox = ({ label, ...others }) => (
  <div>
    <Typography>{label}</Typography>
    <CheckboxBase {...others} />
  </div>
)
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Checkbox
