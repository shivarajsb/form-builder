import { generateTypes } from '../../../utils/helpers'

export default {
  form_create: generateTypes('FORM_CREATE'),
  form_delete: generateTypes('FORM_DELETE'),
  select_form: generateTypes('SELECT_FORM'),
  get_forms: generateTypes('GET_FORMS'),
  save_form: generateTypes('SAVE_FORM'),
  submit_form: generateTypes('SUBMIT_FORM'),
}
