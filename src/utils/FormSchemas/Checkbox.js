import * as yup from 'yup'

export const getInitialValues = values => {
  const initialValues = {
    label: '',
    name: '',
    required: false,
  }
  if (values && values.label) {
    initialValues.label = values.label || ''
  }
  if (values && values.name) {
    initialValues.name = values.name || ''
  }
  if (values && values.required) {
    initialValues.required = values.required || false
  }
  return { initialValues }
}
export const checkboxValidationSchema = yup.object().shape({
  label: yup.string().required('Label is a required field'),
  name: yup.string().required('Name is a required field'),
  required: yup.string().default(false),
})
