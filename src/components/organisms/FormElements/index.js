import React from 'react'
import styled from 'styled-components'

import { data } from '../../../utils/data/mockData'
import Typography from '../../atoms/typography'
import CheckboxModule from '../../molecules/CheckboxModule'
import DividerModule from '../../molecules/DividerModule'
import InputModule from '../../molecules/InputModule'
import TextModule from '../../molecules/TextModule'
import Dropzone from '../Dropzone'

const types = {
  text: TextModule,
  input: InputModule,
  checkbox: CheckboxModule,
  divider: DividerModule,
}

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})
const Wrapper = styled('div')({
  width: '90%',
})
const FormElements = () => (
  <Container>
    <Wrapper>
      <Typography fontSize="l" bold textAlign="center" color="grey">
        Drop and Create
      </Typography>
      {data.map(({ type, meta }) => {
        const Component = types[type]
        return (
          <div>
            <Component data={{ ...meta }} key={meta.id} />
            <Dropzone id={meta.id} />
          </div>
        )
      })}
    </Wrapper>
  </Container>
)
export default FormElements
