import { Formik } from 'formik'
import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../atoms/button'
import { Centered, Form } from '../InputModal'
import { getInitialValues } from '../../../../utils/FormSchemas/Divider'
import Input from '../../../atoms/Input'

const DividerModal = ({ values, handleSubmitForm }) => {
  const { initialValues } = getInitialValues(values)
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
        {({ handleChange, handleSubmit, handleBlur }) => (
          <Form>
            <div>
              <label>Label</label>
              <Input
                placeholder="Enter the text"
                name="label"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <Centered style={{ marginTop: '20px' }}>
              <Button onClick={handleSubmit}>Save</Button>
            </Centered>
          </Form>
        )}
      </Formik>
    </div>
  )
}

DividerModal.propTypes = {
  values: PropTypes.objectOf({ label: PropTypes.string }),
  handleSubmitForm: PropTypes.func.isRequired,
}
DividerModal.defaultProps = {
  values: { label: '' },
}

export default DividerModal
