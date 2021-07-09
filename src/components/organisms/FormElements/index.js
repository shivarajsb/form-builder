import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import CheckboxModule from '../../molecules/CheckboxModule'
import DividerModule from '../../molecules/DividerModule'
import InputModule from '../../molecules/InputModule'
import TextModule from '../../molecules/TextModule'
import { componentActions } from '../../redux-utils/actions'
import { getComponentElements } from '../../redux-utils/selectors/component.selector'
import ModalForm from '../../molecules/ModalForm'
import ContainerModule from '../../molecules/ContainerModule'

export const types = {
  text: TextModule,
  input: InputModule,
  checkbox: CheckboxModule,
  divider: DividerModule,
  container: ContainerModule,
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
  const handleModalClose = () => {
    setModalOpen(false)
  }
  const handleSubmit = e => {
    dispatch(componentActions.editComponent({ selected, data: e }))
  }
  return (
    <Container>
      <Wrapper>
        <Droppable droppableId="components">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {components.map(({ type, id, meta }, index) => {
                const Component = types[type]
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {childProvided => (
                      <Grid
                        {...childProvided.draggableProps}
                        ref={childProvided.innerRef}
                        {...childProvided.dragHandleProps}
                      >
                        <Component
                          data={{ ...meta, id }}
                          handleAction={handleToolbarAction}
                          type={type}
                        />
                      </Grid>
                    )}
                  </Draggable>
                )
              })}
            </div>
          )}
        </Droppable>
      </Wrapper>
      {modalOpen && (
        <ModalForm
          selected={selected}
          open={modalOpen}
          handleClose={handleModalClose}
          handleSubmit={handleSubmit}
        />
      )}
    </Container>
  )
}
export default FormElements
