import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import createFormSchema from '../../../utils/FormSchemas/CreateForm'
import { Centered, Form } from '../ModalContent/InputModal'
import Button from '../../atoms/button'
import Input from '../../atoms/Input'
import Typography from '../../atoms/typography'

const CreateFormModal = ({ onSubmit }) => {
  const formRef = useRef()
  const handleFormSubmit = e => {
    const { current } = formRef
    current.resetForm()
    onSubmit(e)
  }
  return (
    <div>
      <Formik
        initialValues={{ label: '' }}
        validationSchema={createFormSchema}
        innerRef={formRef}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, isValid }) => (
          <Form>
            <div>Name</div>
            <Input
              placeholder="Enter Form name"
              value={values.label}
              onChange={handleChange}
              name="label"
            />
            {errors.label && (
              <Typography fontSize="s" color="red">
                {errors.label}
              </Typography>
            )}
            <Centered>
              <Button onClick={handleSubmit} disabled={!isValid}>
                Submit
              </Button>
            </Centered>
          </Form>
        )}
      </Formik>
    </div>
  )
}

CreateFormModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default CreateFormModal
