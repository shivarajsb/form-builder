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
    text: '',
    size: {
      label: 'Medium',
      value: 'm',
    },
  }
  if (values && values.text) {
    initialValues.text = values.text || ''
  }

  if (values && values.size) {
    initialValues.size = { label: `${mapper[values.size]}`, value: values.size }
  }
  return { initialValues }
}

export const textValidationSchema = yup.object().shape({
  text: yup.string().required(),
  size: yup.object().required(),
})
