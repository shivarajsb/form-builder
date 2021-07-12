/* eslint-disable react/forbid-prop-types */
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import styled from 'styled-components'

import Input from '../../atoms/Input'
import Checkbox from '../../atoms/checkbox'
import Text from '../../atoms/text'
import Divider from '../../atoms/divider'
import { getInitialValues, validateData } from '../../../utils/FormSchemas/Preview'
import { Form } from '../ModalContent/InputModal'
import Typography from '../../atoms/typography'
import Button from '../../atoms/button'

const types = {
  input: Input,
  checkbox: Checkbox,
  text: Text,
  divider: Divider,
}
const Container = styled('div')({
  position: 'relative',
  height: '100%',
  overflow: 'scroll',
})

const ButtonContainer = styled('div')({
  position: 'fixed',
  left: 20,
  bottom: 40,
  backgroundColor: 'white',
  padding: '10px',
})
const PreviewSection = ({ components, handleValues, handleErrors }) => {
  const initialValues = useMemo(() => getInitialValues(components), [components])
  const handleValidate = values => validateData(components, values)
  return (
    <Container>
      <Formik initialValues={initialValues} validate={handleValidate}>
        {({ handleChange, values, errors }) => {
          handleValues(values)
          handleErrors(errors)
          return (
            <Form>
              {components.map(item => {
                const Component = types[item.type]
                const { name } = item.meta
                return (
                  <div style={{ margin: '20px' }}>
                    {
                      <Component
                        key={item.id}
                        {...item.meta}
                        value={values[name]}
                        onChange={name ? handleChange : null}
                      />
                    }
                    {errors[name] && (
                      <Typography fontSize="s" color="red">
                        {errors[name]}
                      </Typography>
                    )}
                  </div>
                )
              })}
              <ButtonContainer>
                <Button>Submit</Button>
              </ButtonContainer>
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}
PreviewSection.propTypes = {
  components: PropTypes.any.isRequired,
  handleValues: PropTypes.func.isRequired,
  handleErrors: PropTypes.func.isRequired,
}

export default PreviewSection
