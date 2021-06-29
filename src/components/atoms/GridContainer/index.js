import styled from 'styled-components'

export const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: ({ columns }) => '1fr '.repeat(columns),
})
export const GridItem = styled('div')({
  backgroundColor: 'white',
  border: '1px solid #e8e8e8',
  padding: '20px',
  overflow: 'scroll',
  textAlign: 'center',
  resize: 'both',
})
