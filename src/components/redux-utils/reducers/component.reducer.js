import { data } from '../../../utils/data/mockData'
import { componentTypes } from '../types'

const initialState = {
  loading: false,
  currentForm: null,
  components: data,
}

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Component Create */
    case componentTypes.component_create.request:
      return { ...state, loading: true }
    case componentTypes.component_create.success:
      return { ...state, loading: false }
    case componentTypes.component_create.failure:
      return { ...state, loading: false }
    /* Component Edit */
    case componentTypes.component_edit.request:
      return { ...state, loading: true }
    case componentTypes.component_edit.success:
      return { ...state, loading: false }
    case componentTypes.component_edit.failure:
      return { ...state, loading: false }
    /* Component Delete */
    case componentTypes.component_delete.request:
      return { ...state, loading: true }
    case componentTypes.component_delete.success:
      return { ...state, loading: false }
    case componentTypes.component_delete.failure:
      return { ...state, loading: false }
    /* Component Swap */
    case componentTypes.component_swap.request:
      return { ...state, loading: true }
    case componentTypes.component_swap.success:
      return { ...state, loading: false }
    case componentTypes.component_swap.failure:
      return { ...state, loading: false }
    default:
      return state
  }
}
export default componentsReducer
