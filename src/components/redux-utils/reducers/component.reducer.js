/* eslint-disable no-case-declarations */

import { componentTypes, formTypes } from '../types'

const initialState = {
  loading: false,
  currentForm: null,
  components: [],
  saved: true,
}

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Component Create */
    case componentTypes.component_create.request:
      return { ...state, loading: true }
    case componentTypes.component_create.success:
      return { ...state, components: action.payload, loading: false, saved: false }
    case componentTypes.component_create.failure:
      return { ...state, loading: false }
    /* Component Edit */
    case componentTypes.component_edit.request:
      return { ...state, loading: true }
    case componentTypes.component_edit.success:
      const { payload } = action
      const updatedComponents = state.components.map(item => {
        if (item.id === payload.id) {
          return { ...item, meta: payload.data }
        }
        return item
      })
      return { ...state, loading: false, components: updatedComponents, saved: false }
    case componentTypes.component_edit.failure:
      return { ...state, loading: false }
    /* Component Delete */
    case componentTypes.component_delete.request:
      return { ...state, loading: true }
    case componentTypes.component_delete.success:
      return { ...state, components: action.payload, loading: false, saved: false }
    case componentTypes.component_delete.failure:
      return { ...state, loading: false }
    /* Component Swap */
    case componentTypes.component_swap.request:
      return { ...state, loading: true }
    case componentTypes.component_swap.success:
      return { ...state, components: action.payload, loading: false, saved: false }
    case componentTypes.component_swap.failure:
      return { ...state, loading: false }
    /* Duplicate Component */
    case componentTypes.component_duplicate.request:
      return { ...state, loading: true }
    case componentTypes.component_duplicate.success:
      return { ...state, components: action.payload, loading: false, saved: false }
    case componentTypes.component_duplicate.failure:
      return { ...state, loading: false }
    /* Get Form Components */
    case componentTypes.get_form_components.success:
      return { ...state, loading: false, components: action.payload }
    /* Delete Form */
    case formTypes.form_delete.success:
      return { ...state, loading: false, components: [] }
    case formTypes.form_create.success:
      return { ...state, loading: false, components: [] }
    /* Save Form */
    case componentTypes.save_form:
      return { ...state, saved: true }
    default:
      return state
  }
}
export default componentsReducer
