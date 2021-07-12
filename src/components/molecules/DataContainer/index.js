import styled from 'styled-components'

const Container = styled('div')({
  color: ({ type }) => (type === 'error' ? 'red' : null),
  padding: '20px',
})

export default Container
