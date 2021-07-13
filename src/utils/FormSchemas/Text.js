/* eslint-disable array-callback-return */
import * as yup from 'yup'

const mapper = {
  m: 'Medium',
  s: 'Small',
  l: 'Large',
  xl: 'Extra Large',
}

export const getInitialValues = values => {
  const initialValues = {
    label: '',
    fontSize: {
      label: 'Medium',
      value: 'm',
    },
    bold: false,
  }
  if (values && values.label) {
    initialValues.label = values.label || ''
  }

  if (values && values.fontSize) {
    initialValues.fontSize = { label: `${mapper[values.fontSize]}`, value: values.fontSize }
  }
  if (values && values.bold) {
    initialValues.bold = values.bold
  }
  return { initialValues }
}

export const textValidationSchema = yup.object().shape({
  label: yup
    .string()
    .required('Text is a required field')
    .default(''),
  fontSize: yup
    .object()
    .required('Font Size is a required field')
    .default(''),
  bold: yup.bool().default(false),
})
