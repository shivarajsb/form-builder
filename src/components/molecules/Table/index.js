import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import { GridContainer, GridItem } from '../../atoms/GridContainer'
import Minus from '../../svg/minus'
import Plus from '../../svg/plus'

const HorizontalDiv = styled('div')({
  position: 'absolute',
  flexDirection: 'row',
  bottom: '-20px',
  right: '30px',
  backgroundColor: 'white',
  padding: '2px',
  borderRadius: '5px',
  border: '1px solid #e8e8e8',
})
const VerticalDiv = styled('div')({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  right: '-10px',
  top: '20px',
  backgroundColor: 'white',
  padding: '2px',
  borderRadius: '5px',
  border: '1px solid #e8e8e8',
})

const Wrapper = styled('div')({
  position: 'relative',
})
const Span = styled('span')({
  display: 'inline',
  padding: '0px',
})

const Table = () => {
  const [columns, setColumns] = useState(2)
  const [rows, setRows] = useState(2)

  const handleRowAction = action => {
    setRows(e => (action === 'plus' ? e + 1 : e - 1))
  }

  const handleColumnAction = action => {
    setColumns(e => (action === 'plus' ? e + 1 : e - 1))
  }

  return (
    <Wrapper>
      <HorizontalDiv>
        <Span onClick={() => handleColumnAction('minus')}>
          <Minus />
        </Span>
        <Span onClick={() => handleColumnAction('plus')}>
          <Plus />
        </Span>
      </HorizontalDiv>
      <VerticalDiv>
        <Span onClick={() => handleRowAction('minus')}>
          <Minus />
        </Span>
        <Span onClick={() => handleRowAction('plus')}>
          <Plus />
        </Span>
      </VerticalDiv>
      <GridContainer columns={columns}>
        {Array.from(Array(columns * rows), () => {
          const key = uuid()
          return <GridItem key={key} />
        })}
      </GridContainer>
    </Wrapper>
  )
}
export default Table
