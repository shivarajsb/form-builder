/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import { Formik } from 'formik'
import React, { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../../../atoms/button'
import Checkbox from '../../../atoms/checkbox'
import Input from '../../../atoms/Input'
import Typography from '../../../atoms/typography'
import { getInitialValues, inputValidationSchema } from '../../../../utils/FormSchemas/Input'
import { validateDuplicateElement } from '../../../../utils/helpers'

export const Flex = styled('div')({
  display: 'flex',
  '>*': {
    width: '50%',
    margin: '10px',
  },
})

export const Form = styled('form')({
  backgroundColor: 'white',
  padding: '20px',
  '>*': {
    marginTop: '20px',
  },
})

export const Centered = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})

const InputModal = ({ values, handleSubmitForm, components }) => {
  const { placeholders, initialValues } = useMemo(() => getInitialValues(values), [values])
  const [error, setError] = useState('')
  const formRef = useRef()

  const handleSubmit = e => {
    const { current } = formRef
    if (validateDuplicateElement(components, { ...e, id: values.id })) {
      setError(null)
      handleSubmitForm(e)
      current.resetForm()
    } else {
      setError("Please select a different name. Element with the same 'name' already exists")
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={inputValidationSchema}
        innerRef={formRef}
      >
        {({ handleChange, errors, touched, handleSubmit, handleBlur, values, isValid }) => {
          const buttonValidState = isValid
          return (
            <Form>
              <Flex>
                <div>
                  <label>Name</label>
                  <Input
                    name="name"
                    onChange={handleChange}
                    placeholder={placeholders.name}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <Typography fontSize="s" color="red">
                      {errors.name}
                    </Typography>
                  )}
                </div>
                <div>
                  <label>Label</label>
                  <Input
                    name="label"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholders.label}
                    value={values.label}
                  />
                  {touched.label && errors.label && (
                    <Typography fontSize="s" color="red">
                      {errors.label}
                    </Typography>
                  )}
                </div>
              </Flex>
              <Flex>
                <div>
                  <label>Placeholder</label>
                  <Input
                    name="placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholders.placeholder}
                    value={values.placeholder}
                  />
                  {touched.placeholder && errors.placeholder && (
                    <Typography fontSize="s" color="red">
                      {errors.placeholder}
                    </Typography>
                  )}
                </div>
              </Flex>
              <Typography style={{ marginLeft: '10px' }} fontSize="m" bold>
                Options
              </Typography>
              <Flex>
                <div>
                  <label>Required</label>
                  <Checkbox name="required" onChange={handleChange} checked={values.required} />
                </div>
              </Flex>
              {error ? (
                <Typography fontSize="s" color="red">
                  {error}
                </Typography>
              ) : null}
              <Centered>
                <div>
                  <Button type="button" onClick={handleSubmit} disabled={!buttonValidState}>
                    Save
                  </Button>
                </div>
              </Centered>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

InputModal.propTypes = {
  values: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  components: PropTypes.object.isRequired,
}
export default InputModal
