import styled from 'styled-components'

const Button = styled('button')({
  backgroundColor: ({ variant }) => (variant === 'primary' ? '#197AFF' : '#ffffff'),
  borderRadius: '10em',
  padding: '12px',
  color: ({ variant }) => (variant === 'primary' ? 'white' : '#197AFF'),
  fontSize: '16px',
  fontWeight: 'bold',
  border: '1px solid white',
  borderStyle: ({ dashed }) => (dashed ? 'dashed' : null),
})

export default Button
