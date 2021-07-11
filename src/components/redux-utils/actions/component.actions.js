import { componentTypes } from '../types'

/* Create Componnet */
export const createComponent = payload => ({
  type: componentTypes.component_create.request,
  payload,
})
export const createComponentSuccess = payload => ({
  type: componentTypes.component_create.success,
  payload,
})
export const createComponentFailure = payload => ({
  type: componentTypes.component_create.failure,
  payload,
})

/* Edit Component */
export const editComponent = payload => ({ type: componentTypes.component_edit.request, payload })
export const editComponentSuccess = payload => ({
  type: componentTypes.component_edit.success,
  payload,
})
export const editComponentFailure = payload => ({
  type: componentTypes.component_edit.failure,
  payload,
})
/* Delete Component */
export const deleteComponent = payload => ({
  type: componentTypes.component_delete.request,
  payload,
})
export const deleteComponentSuccess = payload => ({
  type: componentTypes.component_delete.success,
  payload,
})
export const deleteComponentFailure = payload => ({
  type: componentTypes.component_delete.failure,
  payload,
})
/* Edit Component */
export const swapComponent = payload => ({ type: componentTypes.component_swap.request, payload })
export const swapComponentSuccess = payload => ({
  type: componentTypes.component_swap.success,
  payload,
})
export const swapComponentFailure = payload => ({
  type: componentTypes.component_swap.failure,
  payload,
})
/* Duplicate Components */
export const createDuplicate = payload => ({
  type: componentTypes.component_duplicate.request,
  payload,
})

export const createDuplicateSuccess = payload => ({
  type: componentTypes.component_duplicate.success,
  payload,
})

export const createDuplicateFailure = payload => ({
  type: componentTypes.component_duplicate.failure,
  payload,
})
/* Get form components */
export const getFormComponents = payload => ({
  type: componentTypes.get_form_components.request,
  payload,
})
export const getFormComponentsSuccess = payload => ({
  type: componentTypes.get_form_components.success,
  payload,
})
export const getFormComponentsFailure = payload => ({
  type: componentTypes.get_form_components.failure,
  payload,
})
