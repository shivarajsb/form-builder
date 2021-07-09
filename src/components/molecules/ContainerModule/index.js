/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import times from 'lodash/times'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Droppable from '../../atoms/container'
import { Padding } from '../InputModule'
import Plus from '../../atoms/svg/plus'
import Minus from '../../atoms/svg/minus'
import withToolbar from '../../../utils/hoc/withToolbar'

const Wrapper = styled('div')({
  backgroundColor: 'white',
  borderRadius: '10px',
  position: 'relative',
})

const HorizontalDiv = styled('div')({
  position: 'absolute',
  flexDirection: 'row',
  top: '-20px',
  right: '30px',
  backgroundColor: 'white',
  padding: '2px',
  borderRadius: '5px',
  border: '1px solid #e8e8e8',
  '>*': {
    margin: '10px',
    marginTop: '20px',
  },
})
const Span = styled('span')({
  display: 'inline',
  padding: '0px',
})

const ContainerModule = ({ displayType, childElements, id, onItemDrop }) => {
  const [numberChildren, setNumberChildren] = useState(1)

  const handleClick = action => {
    setNumberChildren(e => (action === 'plus' ? e + 1 : e - 1))
  }
  const handleDropItem = e => {
    onItemDrop({ ...e, id })
  }
  return (
    <Wrapper>
      {displayType === 'flex' ? (
        <HorizontalDiv>
          <Span onClick={() => handleClick('minus')}>
            <Minus />
          </Span>
          <Span onClick={() => handleClick('plus')}>
            <Plus />
          </Span>
        </HorizontalDiv>
      ) : null}
      <Padding style={{ display: displayType }}>
        {displayType !== 'block' ? (
          times(numberChildren).map((i, index) => (
            <Droppable
              key={i}
              position={index + 1}
              componentMeta={childElements[i] || null}
              width={100 / numberChildren}
              onHandleDrop={handleDropItem}
            />
          ))
        ) : (
          <Droppable
            componentMeta={childElements && childElements[0]}
            onHandleDrop={handleDropItem}
          />
        )}
      </Padding>
    </Wrapper>
  )
}

ContainerModule.propTypes = {
  displayType: PropTypes.string,
  childElements: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onItemDrop: PropTypes.func.isRequired,
}
ContainerModule.defaultProps = {
  displayType: 'block',
}
export default withToolbar(ContainerModule, 'container', 'Container')
