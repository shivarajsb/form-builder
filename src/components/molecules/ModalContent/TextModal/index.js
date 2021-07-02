/* eslint-disable no-shadow */
import { Formik } from 'formik'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import Button from '../../../atoms/button'
import { Centered, Form } from '../InputModal'
import Input from '../../../atoms/Input'
import { getInitialValues, textValidationSchema } from '../../../../utils/FormSchemas/Text'
import Typography from '../../../atoms/typography'

const selectValues = [
  { label: 'Small', value: 's' },
  { label: 'Medium', value: 'm' },
  { label: 'Large', value: 'l' },
  { label: 'Extra Large', value: 'xl' },
]

const TextModal = ({ values, handleSubmitForm }) => {
  const { initialValues } = getInitialValues(values)
  const formRef = useRef()

  const handleSubmit = e => {
    const value = { ...e, size: e.size.value }
    const { current } = formRef

    handleSubmitForm(value)
    current.resetForm()
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
          dirty,
          isValid,
        }) => {
          const buttonValidState = !isValid || !dirty
          return (
            <Form>
              <div>
                <label>Text</label>
                <Input
                  placeholder="Enter the text"
                  name="text"
                  onChange={handleChange}
                  value={values.text}
                  onBlur={handleBlur}
                />
                {touched.text && errors.text && (
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
                  name="size"
                  value={values.size}
                  onChange={e => setFieldValue('size', e)}
                />
              </div>
              <Centered style={{ marginTop: '20px' }}>
                <Button onClick={handleSubmit} disabled={buttonValidState}>
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
  values: PropTypes.objectOf({ text: PropTypes.string, size: PropTypes.string }),
  handleSubmitForm: PropTypes.func.isRequired,
}
TextModal.defaultProps = {
  values: { text: 'Text', size: 'm' },
}
export default TextModal
