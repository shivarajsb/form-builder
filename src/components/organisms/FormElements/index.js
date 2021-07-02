import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import CheckboxModule from '../../molecules/CheckboxModule'
import DividerModule from '../../molecules/DividerModule'
import InputModule from '../../molecules/InputModule'
import TextModule from '../../molecules/TextModule'
import Dropzone from '../../molecules/Dropzone'
import { componentActions } from '../../redux-utils/actions'
import { getComponentElements } from '../../redux-utils/selectors/component.selector'
import ModalForm from '../../molecules/ModalForm'

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
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const handleItemDrop = e => {
    dispatch(componentActions.swapComponent(e))
  }
  const components = useSelector(getComponentElements)

  const handleToolbarAction = e => {
    const { action } = e
    if (action === 'delete') {
      dispatch(componentActions.deleteComponent(e))
    } else if (action === 'duplicate') {
      dispatch(componentActions.createDuplicate(e))
    } else if (action === 'edit') {
      const selectedComponent = components.filter(i => i.id === e.id)[0]
      setSelected(selectedComponent)
      setModalOpen(true)
    }
  }
  return (
    <Container>
      <Wrapper>
        {components.map(({ type, id, meta }) => {
          const Component = types[type]
          return (
            <Grid key={id}>
              <Dropzone id={id} onItemDrop={handleItemDrop} key={id} />
              <Component data={{ ...meta, id }} handleAction={handleToolbarAction} />
            </Grid>
          )
        })}
        <Dropzone id={'end'} onItemDrop={handleItemDrop} key={'end'} />
      </Wrapper>
      <ModalForm selected={selected} open={modalOpen} handleClose={() => setModalOpen(false)} />
    </Container>
  )
}
export default FormElements
