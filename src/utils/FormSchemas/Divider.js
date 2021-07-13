/* eslint-disable array-callback-return */
import * as yup from 'yup'

export const getInitialValues = values => {
  const initialValues = {
    label: '',
  }
  Object.keys(initialValues).map(i => {
    initialValues[i] = (values && values[i]) || initialValues[i]
  })
  return { initialValues }
}
export const dividerValidationSchema = yup.object().shape({
  label: yup.string().default(''),
})
