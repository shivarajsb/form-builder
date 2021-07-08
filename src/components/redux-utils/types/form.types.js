import { generateTypes } from '../../../utils/helpers'

export default {
  form_create: generateTypes('FORM_CREATE'),
  form_delete: generateTypes('FORM_DELETE'),
  select_form: generateTypes('SELECT_FORM'),
  get_forms: generateTypes('GET_FORMS'),
}
