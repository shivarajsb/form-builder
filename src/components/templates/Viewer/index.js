import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Typography from '../../atoms/typography'

const Container = styled('div')({
  padding: '30px',
})

const Viewer = () => (
  <Container>
    <Typography fontSize="xl" color="#D7D8D8">
      Preview
    </Typography>
  </Container>
)

Viewer.propTypes = {}
export default Viewer
