import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Typography from '../../atoms/typography'
import Div from '../../atoms/Div'
import Button from '../../atoms/button'
import { getFormById } from '../../redux-utils/selectors/form.selector'

const GridParent = styled('grid')({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridColumnGap: '30px',
  gridRowGap: '30px',
  height: '93vh',
  padding: '30px',
})

const HeaderContainer = styled('div')({
  gridArea: '1 / 1 / 2 / 6',
})
const FormContainer = styled('div')({
  gridArea: '2 / 1 / 5 / 4',
})
const DataContainer = styled('div')({
  gridArea: '2 / 4 / 3 / 6',
})
const ErrorsContainer = styled('div')({
  gridArea: '3 / 4 / 4 / 6',
})
const EventsContainer = styled('div')({
  gridArea: '4 / 4 / 5 / 6',
})
const FooterContainer = styled('div')({
  gridArea: '5 / 1 / 6 / 6',
})

const Viewer = () => {
  const { id } = useParams()
  const currentForm = useSelector(getFormById(id))
  console.log('This is the current form ', currentForm)
  return (
    <GridParent>
      <HeaderContainer>
        <Typography fontSize="xl" color="#D7D8D8" bold>
          Preview
        </Typography>
      </HeaderContainer>
      <FormContainer>
        <Typography fontSize="m">Preview</Typography>
        <Div>
          <Typography>Hello World this is Shivaraj Bakale</Typography>
        </Div>
      </FormContainer>
      <DataContainer>
        <Typography fontSize="m">Data</Typography>
        <Div>
          <Typography>Data Container here</Typography>
        </Div>
      </DataContainer>
      <ErrorsContainer>
        <Typography fontSize="m">Errors</Typography>
        <Div>
          <Typography>Errors Container here</Typography>
        </Div>
      </ErrorsContainer>
      <EventsContainer>
        <Typography fontSize="m">Events</Typography>
        <Div>
          <Typography>EventsContainer here</Typography>
        </Div>
      </EventsContainer>
      <FooterContainer>
        <Button>Submit</Button>
      </FooterContainer>
    </GridParent>
  )
}
Viewer.propTypes = {}
export default Viewer
