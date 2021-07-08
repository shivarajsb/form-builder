import { formTypes } from '../types'

/* Create Form */
export const createForm = payload => ({ type: formTypes.form_create.request, payload })
export const createFormSuccess = payload => ({ type: formTypes.form_create.success, payload })
export const createFormFailure = payload => ({ type: formTypes.form_create.failure, payload })
/* Delete Form */
export const deleteForm = payload => ({ type: formTypes.form_delete.request, payload })
export const deleteFormSuccess = payload => ({ type: formTypes.form_delete.success, payload })
export const deleteFormFailure = payload => ({ type: formTypes.form_delete.failure, payload })

/* Select Form */
export const selectForm = payload => ({ type: formTypes.select_form.request, payload })
export const selectFormSuccess = payload => ({ type: formTypes.select_form.success, payload })
export const selectFormFailure = payload => ({ type: formTypes.select_form.failure, payload })

/* Get Forms */
export const getForms = payload => ({ type: formTypes.get_forms.request, payload })
export const getFormsSuccess = payload => ({ type: formTypes.get_forms.success, payload })
export const getFormsFailure = payload => ({ type: formTypes.get_forms.failure, payload })
