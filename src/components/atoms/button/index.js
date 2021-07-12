import styled from 'styled-components'

const buttonTypes = {
  primary: ['#197AFF', '#ffffff'],
  danger: ['#ffffff', '#DA5555'],
}

const Button = styled('button')({
  backgroundColor: ({ variant }) => (variant ? buttonTypes[variant][0] : '#ffffff'),
  borderRadius: '10em',
  padding: '12px',
  color: ({ variant }) => (variant ? buttonTypes[variant][1] : '#197AFF'),
  fontSize: '16px',
  fontWeight: 'bold',
  border: ({ variant }) => `${variant === 'primary' ? '1px solid white' : '1px solid #e8e8e8'}`,
  borderStyle: ({ dashed }) => (dashed ? 'dashed' : null),
  ':hover': {
    filter: 'contrast(0.8)',
  },
  ':disabled': {
    pointerEvents: 'none',
    color: 'grey',
  },
})

export default Button
