import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { data } from '../../../utils/data/mockData'
import CheckboxModule from '../../molecules/CheckboxModule'
import DividerModule from '../../molecules/DividerModule'
import InputModule from '../../molecules/InputModule'
import TextModule from '../../molecules/TextModule'
import Dropzone from '../../molecules/Dropzone'
import { componentActions } from '../../redux-utils/actions'

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
const Grid = styled('div')({
  display: 'block',
})
const FormElements = () => {
  const dispatch = useDispatch()
  const handleItemDrop = e => {
    dispatch(componentActions.swapComponent(e))
  }
  return (
    <Container>
      <Wrapper>
        {data.map(({ type, meta }) => {
          const Component = types[type]
          return (
            <Grid key={meta.id}>
              <Component data={{ ...meta }} />
              <Dropzone id={meta.id} onItemDrop={handleItemDrop} key={meta.id} />
            </Grid>
          )
        })}
      </Wrapper>
    </Container>
  )
}
export default FormElements
