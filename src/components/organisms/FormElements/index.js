import React from 'react'
import styled from 'styled-components'

import { data } from '../../../utils/data/mockData'
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
  border: '1px solid #e8e8e8',
})
const Wrapper = styled('div')({
  width: '90%',
  marginTop: 60,
})
const FormElements = () => (
  <Container>
    <Wrapper>
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
