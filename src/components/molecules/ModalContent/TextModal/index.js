/* eslint-disable no-shadow */
import { Formik } from 'formik'
import React, { useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import Button from '../../../atoms/button'
import { Centered, Form } from '../InputModal'
import Input from '../../../atoms/Input'
import { getInitialValues, textValidationSchema } from '../../../../utils/FormSchemas/Text'
import Typography from '../../../atoms/typography'
import Checkbox from '../../../atoms/checkbox'

const selectValues = [
  { label: 'Small', value: 's' },
  { label: 'Medium', value: 'm' },
  { label: 'Large', value: 'l' },
  { label: 'Extra Large', value: 'xl' },
]

const TextModal = ({ values, handleSubmitForm }) => {
  const formRef = useRef()
  const { initialValues } = useMemo(() => getInitialValues(values), [values])
  const handleSubmit = e => {
    const value = { ...e, fontSize: e.fontSize.value }
    handleSubmitForm(value)
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        innerRef={formRef}
        validationSchema={textValidationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          setFieldValue,
          touched,
          errors,
          isValid,
        }) => {
          const buttonValidState = isValid
          return (
            <Form>
              <div>
                <label>Text</label>
                <Input
                  placeholder="Enter the text"
                  name="label"
                  onChange={handleChange}
                  value={values.label}
                  onBlur={handleBlur}
                />
                {touched.label && errors.label && (
                  <Typography fontSize="s" color="red">
                    {errors.name}
                  </Typography>
                )}
              </div>
              <div>
                <label>Size</label>
                <Select
                  placeholder="Text Size"
                  options={selectValues}
                  name="fontSize"
                  value={values.fontSize}
                  onChange={e => setFieldValue('fontSize', e)}
                />
              </div>
              <div>
                <label>Bold</label>
                <Checkbox checked={values.bold} onChange={handleChange} name="bold" />
              </div>
              <Centered style={{ marginTop: '20px' }}>
                <Button onClick={handleSubmit} disabled={!buttonValidState}>
                  Save
                </Button>
              </Centered>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

TextModal.propTypes = {
  values: PropTypes.objectOf({
    label: PropTypes.string,
    fontSize: PropTypes.string,
    bold: PropTypes.bool,
  }).isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
}
export default TextModal
