/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

import Button from '../../atoms/button'
import SpaceBetween from '../../atoms/space-between'
import Plus from '../../atoms/svg/plus'
import Typography from '../../atoms/typography'
import ListItem from '../../atoms/list-item'

const ComponentsGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '>*': {
    margin: '5px',
  },
})

const Wrapper = styled('div')({
  backgroundColor: '#197AFF',
  height: '95vh',
  padding: '20px',
  '>*': {
    marginTop: '40px',
  },
})

const formComponents = [
  {
    label: 'Input',
    type: 'input',
  },
  {
    label: 'Checkbox',
    type: 'checkbox',
  },
  {
    label: 'File Uploader',
    type: 'upload',
  },
  {
    label: 'Text',
    type: 'text',
  },
  {
    label: 'Divider',
    type: 'divider',
  },
]
const Sidebar = ({ handleCreateForm, formList, handleFormClick, currentForm }) => (
  <Wrapper>
    <div>
      <SpaceBetween>
        <Typography bold fontSize="m" color="white">
          Forms
        </Typography>
        <span onClick={handleCreateForm}>
          <Plus color="white" />
        </span>
      </SpaceBetween>
      <div style={{ maxHeight: '200px', overflow: 'scroll' }}>
        {formList &&
          formList.map(item => (
            <ListItem
              label={item.name}
              key={item.id}
              id={item.id}
              onClickItem={handleFormClick}
              selected={currentForm && currentForm.id === item.id}
            />
          ))}
      </div>
    </div>
    <div>
      <Typography bold fontSize="m" color="white">
        Cell Layout
      </Typography>
      <ComponentsGroup>
        <Button dashed variant="primary" type="container">
          Container
        </Button>
      </ComponentsGroup>
    </div>
    <div>
      <Typography bold fontSize="m" color="white">
        Form Components
      </Typography>
      <Droppable droppableId="components">
        {provided => (
          <ComponentsGroup {...provided.droppableProps} ref={provided.innerRef}>
            {formComponents.map(({ label, type }, index) => (
              <Draggable key={type} draggableId={type} index={index}>
                {childProvided => (
                  <div
                    ref={childProvided.innerRef}
                    {...childProvided.draggableProps}
                    {...childProvided.dragHandleProps}
                  >
                    <Button dashed variant="primary" id={type} type={type}>
                      {label}
                    </Button>
                  </div>
                )}
              </Draggable>
            ))}
          </ComponentsGroup>
        )}
      </Droppable>
    </div>
  </Wrapper>
)
Sidebar.propTypes = {
  handleCreateForm: PropTypes.func.isRequired,
  formList: PropTypes.arrayOf({
    name: PropTypes.string,
    id: PropTypes.string,
    createdAt: PropTypes.number,
  }).isRequired,
  handleFormClick: PropTypes.func.isRequired,
  currentForm: PropTypes.objectOf({
    name: PropTypes.string,
    id: PropTypes.string,
    createdAt: PropTypes.number,
  }),
}

Sidebar.defaultProps = {
  currentForm: {},
}

export default Sidebar
