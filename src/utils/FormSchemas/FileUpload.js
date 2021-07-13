import * as yup from 'yup'

export const getInitialValues = values => {
  const initialValues = {
    name: '',
    label: '',
    required: '',
  }
  if (values && values.name) {
    initialValues.name = values.name || ''
  } else if (values && values.label) {
    initialValues.label = values.label || ''
  } else if (values && values.required) {
    initialValues.required = values.required || ''
  }
  return { initialValues }
}
export const fileUploadValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .default(''),
  label: yup
    .string()
    .required('Label is a required field')
    .default(''),
  required: yup.bool().default(false),
})
