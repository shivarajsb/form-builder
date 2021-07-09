import styled from 'styled-components'

const Element = styled('div').attrs({
  draggable: true,
})({
  textAlign: 'center',
  padding: '12px',
  borderRadius: '20px',
  backgroundColor: '#197AFF',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  border: '1px solid white',
  borderStyle: 'dashed',
})

export default Element
