/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import { Formik } from 'formik'
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/button'
import { Centered, Flex, Form } from '../InputModal'
import { getInitialValues } from '../../../../utils/FormSchemas/Checkbox'
import Input from '../../../atoms/Input'
import Checkbox from '../../../atoms/checkbox'
import { validateDuplicateElement } from '../../../../utils/helpers'
import Typography from '../../../atoms/typography'

const CheckboxModal = ({ values, handleSubmitForm, components }) => {
  const { initialValues } = getInitialValues(values)
  const [error, setError] = useState()
  const formRef = useRef()
  const submitForm = e => {
    const { current } = formRef
    if (validateDuplicateElement(components, { ...e, id: values.id })) {
      setError(null)
      handleSubmitForm(e)
      current.resetForm()
    } else {
      setError('Please select a different name. Element with the same name already exists')
    }
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submitForm} innerRef={formRef}>
        {({ handleChange, handleSubmit, handleBlur, values }) => (
          <Form>
            <Flex>
              <div>
                <label>Name</label>
                <Input
                  placeholder="Enter the Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div>
                <label>Label</label>
                <Input
                  placeholder="Enter the Label"
                  name="label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.label}
                />
              </div>
            </Flex>
            <Flex>
              <Checkbox
                label="Required"
                name="required"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.required}
              />
            </Flex>
            {error ? (
              <Typography fontSize="s" color="red">
                {error}
              </Typography>
            ) : null}
            <Centered style={{ marginTop: '20px' }}>
              <Button onClick={handleSubmit}>Save</Button>
            </Centered>
          </Form>
        )}
      </Formik>
    </div>
  )
}

CheckboxModal.propTypes = {
  values: PropTypes.objectOf({
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.string,
  }).isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  components: PropTypes.any.isRequired,
}
export default CheckboxModal
