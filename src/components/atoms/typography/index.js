import styled from 'styled-components'

const Typography = styled('p')({
  margin: 0,
  fontWeight: ({ bold }) => (bold ? 'bold' : null),
  fontSize: ({ fontSize }) => {
    const map = { xl: '36px', l: '26px', m: '20px', s: '12px' }
    return map[fontSize]
  },
  color: '#333333',
})
export default Typography
