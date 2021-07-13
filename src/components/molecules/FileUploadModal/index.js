/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import { Formik } from 'formik'
import React, { useMemo, useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/button'
import Checkbox from '../../atoms/checkbox'
import { Centered, Flex } from '../ModalContent/InputModal'
import Input from '../../atoms/Input'
import Typography from '../../atoms/typography'
import { getInitialValues, fileUploadValidationSchema } from '../../../utils/FormSchemas/FileUpload'

const FileUploadModal = ({ values, handleSubmitForm }) => {
  const formRef = useRef()

  const handleFormSubmit = e => {
    const { current } = formRef
    handleSubmitForm(e)
    current.resetForm()
  }
  const { initialValues } = useMemo(() => getInitialValues(values), [values])
  return (
    <div>
      <Formik
        onSubmit={handleFormSubmit}
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={fileUploadValidationSchema}
      >
        {({ handleChange, errors, touched, handleSubmit, handleBlur, values, isValid, dirty }) => {
          const disableSubmit = !(isValid && dirty)
          return (
            <div>
              <Flex>
                <div>
                  <label>Name</label>
                  <Input
                    placeholder="Enter the Name"
                    name="name"
                    onBlur={handleBlur}
                    value={values.name || initialValues.name}
                    onChange={handleChange}
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
                    placeholder="Enter the Label"
                    name="label"
                    onBlur={handleBlur}
                    value={values.label || initialValues.label}
                    onChange={handleChange}
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
                  <Checkbox
                    label="Required"
                    name="required"
                    onBlur={handleBlur}
                    checked={values.required || initialValues.required}
                    onChange={handleChange}
                  />
                  {touched.required && errors.required && (
                    <Typography fontSize="s" color="red">
                      {errors.required}
                    </Typography>
                  )}
                </div>
              </Flex>
              <Centered>
                <Button onClick={handleSubmit} disabled={disableSubmit}>
                  Submit
                </Button>
              </Centered>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

FileUploadModal.propTypes = {
  values: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
}

export default FileUploadModal
