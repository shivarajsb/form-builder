import * as yup from 'yup'

const createFormSchema = yup.object().shape({
  label: yup.string().required('Form name is required'),
})
export default createFormSchema
