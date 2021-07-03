/* eslint-disable react/forbid-prop-types */
import * as yup from 'yup'

export const getInitialValues = values => {
  const initialValues = {
    label: '',
    name: '',
    placeholder: '',
    required: false,
  }
  const placeholders = {
    label: 'Enter the label',
    name: 'Enter the name',
    placeholder: 'Enter the placeholder',
  }
  // eslint-disable-next-line array-callback-return
  Object.keys(initialValues).map(i => {
    initialValues[i] = (values && values[i]) || initialValues[i]
  })
  return { initialValues, placeholders }
}

export const inputValidationSchema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  label: yup.string().required('Label is a required field'),
  required: yup.bool(),
  placeholder: yup.string(),
})
