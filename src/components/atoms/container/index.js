/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Droppable as ChildDroppable } from 'react-beautiful-dnd'

import Typography from '../typography'
import { types } from '../../organisms/FormElements'

const Container = styled('div')({
  display: 'block',
  minHeight: '50px',
  borderRadius: '10px',
  padding: '20px',
  backgroundColor: '#e8e8e8',
  textAlign: 'center',
  margin: '10px',
  width: ({ width }) => `${width}%`,
})

const Droppable = ({ onHandleDrop, width, componentMeta, position, ...others }) => {
  const { meta, type } = componentMeta || {}
  const Component = type ? types[type] : null
  return (
    <Container width={width} {...others}>
      <ChildDroppable droppableId="container">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {!Component ? <Typography>Drop the element here </Typography> : <Component {...meta} />}
          </div>
        )}
      </ChildDroppable>
    </Container>
  )
}

Droppable.propTypes = {
  onHandleDrop: PropTypes.func.isRequired,
  width: PropTypes.number,
  Component: PropTypes.any.isRequired,
  componentMeta: PropTypes.object.isRequired,
  position: PropTypes.number.isRequired,
}
Droppable.defaultProps = {
  width: '100%',
}

export default Droppable
