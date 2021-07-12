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
import Typography from '../../atoms/typography'

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
  paddingTop: '0px 30px 30px 0px',
  margin: '0px 30px 30px 0px',
})
const Wrapper = styled('div')({
  width: '90%',
  marginTop: 60,
  marginBottom: 300,
})
const Grid = styled('div')({
  display: 'block',
})
const DroppableContainer = styled('div')({
  backgroundColor: ({ isDraggingOver }) => (isDraggingOver ? '#e8e8e8' : null),
  padding: '30px 10px 30px 10px',
  transition: '0.3s',
  borderRadius: '20px',
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
          {(provided, snapshot) => (
            <DroppableContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {!components.length && (
                <Typography>
                  No Form elements present. Drag and Drop elements from the sidebar
                </Typography>
              )}
              {components &&
                components.map(({ type, id, meta }, index) => {
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
                            key={id}
                            data={{ ...meta, id }}
                            handleAction={handleToolbarAction}
                            type={type}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  )
                })}
            </DroppableContainer>
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
