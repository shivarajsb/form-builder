/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'

import withToolbar from '../../../utils/hoc/withToolbar'
import Input from '../../atoms/Input'
import Typography from '../../atoms/typography'

const Padding = styled('div')({
  padding: '10px 0px 5px 0px',
})

const mockData = {
  id: 1,
  label: 'Name',
  name: 'name',
  required: true,
  min: 4,
  max: 100,
  placeholder: 'Enter your name',
}

const InputModule = () => {
  const { label, name, required, min, max, placeholder, id } = mockData
  const InputWithToolbar = withToolbar(Input)

  const handleAction = data => {
    console.log(data)
  }
  return (
    <div draggable>
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

export default InputModule
