import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Typography from '../../atoms/typography'
import Div from '../../atoms/Div'
import Button from '../../atoms/button'
import { componentActions } from '../../redux-utils/actions'
import { getComponentElements } from '../../redux-utils/selectors/component.selector'
import Input from '../../atoms/Input'
import Checkbox from '../../atoms/checkbox'
import Divider from '../../atoms/divider'
import Text from '../../atoms/text'

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

const types = {
  input: Input,
  checkbox: Checkbox,
  text: Text,
  divider: Divider,
}

const Viewer = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const components = useSelector(getComponentElements)
  useEffect(() => {
    dispatch(componentActions.getFormComponents({ id }))
  }, [])
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
          {components.map(item => {
            const Component = types[item.type]
            return <div style={{ margin: '20px' }}>{<Component {...item.meta} />}</div>
          })}
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
