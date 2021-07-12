import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Typography from '../../atoms/typography'
import Div from '../../atoms/Div'
import { componentActions } from '../../redux-utils/actions'
import { getComponentElements } from '../../redux-utils/selectors/component.selector'
import PreviewSection from '../../molecules/PreviewSection'
import Container from '../../molecules/DataContainer'
import Back from '../../atoms/svg/back'
import { LargeButton } from '../../atoms/button'

const GridParent = styled('grid')({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridColumnGap: '30px',
  gridRowGap: '30px',
  height: '93vh',
  padding: '30px',
})
const HeaderContainer = styled('div')({
  gridArea: '1 / 1 / 2 / 6',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})
const FormContainer = styled('div')({
  gridArea: '2 / 1 / 6 / 4',
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
const FooterSection = styled('div')({
  gridArea: '6 / 1/7/6',
})

const Viewer = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const components = useSelector(getComponentElements)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  useEffect(() => {
    dispatch(componentActions.getFormComponents({ id }))
  }, [])
  const handlePreviewState = (action, data) => {
    if (action === 'errors') {
      setErrors(data)
    } else {
      setValues(data)
    }
  }
  const handleRedirect = () => {
    history.goBack()
  }
  return (
    <GridParent>
      <HeaderContainer>
        <LargeButton onClick={handleRedirect}>
          <Back />
          <Typography fontSize="l" color="#888888" bold>
            Back
          </Typography>
        </LargeButton>
        <Typography fontSize="xl" color="#D7D8D8" bold>
          Preview
        </Typography>
      </HeaderContainer>
      <FormContainer>
        <Typography fontSize="m">Preview</Typography>
        <Div>
          <PreviewSection
            components={components}
            handleErrors={e => handlePreviewState('errors', e)}
            handleValues={e => handlePreviewState('values', e)}
          />
        </Div>
      </FormContainer>
      <DataContainer>
        <Typography fontSize="m">Data</Typography>
        <Div>
          <Container>{JSON.stringify(values)}</Container>
        </Div>
      </DataContainer>
      <ErrorsContainer>
        <Typography fontSize="m">Errors</Typography>
        <Div>
          <Container type="error">{JSON.stringify(errors)}</Container>
        </Div>
      </ErrorsContainer>
      <EventsContainer>
        <Typography fontSize="m">Events</Typography>
        <Div>
          <Container />
        </Div>
      </EventsContainer>
      <FooterSection />
    </GridParent>
  )
}
Viewer.propTypes = {}
export default Viewer
