/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withToolbar from '../../../utils/hoc/withToolbar'
import Input from '../../atoms/Input'
import Typography from '../../atoms/typography'

const Padding = styled('div')({
  padding: '10px 0px 5px 0px',
})
const InputModule = ({ handleAction, data }) => {
  const { label, name, required, min, max, placeholder, id } = data
  const InputWithToolbar = withToolbar(Input)

  return (
    <div>
      <Typography fontSize="l" bold>
        {label}
      </Typography>
      <Padding>
        <InputWithToolbar
          name={name}
          id={id}
          required={required}
          placeholder={placeholder}
          min={min}
          max={max}
          handleAction={handleAction}
        />
      </Padding>
    </div>
  )
}
InputModule.propTypes = {
  handleAction: PropTypes.func.isRequired,
  data: PropTypes.objectOf({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired.isRequired,
    id: PropTypes.string.isRequired,
  }),
}
InputModule.defaultProps = {
  data: {
    id: 1,
    label: 'Name',
    name: 'name',
    required: true,
    min: 4,
    max: 100,
    placeholder: 'Enter your name',
  },
}

export default InputModule
