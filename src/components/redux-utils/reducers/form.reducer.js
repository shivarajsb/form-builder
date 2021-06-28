import { formTypes } from '../types/'

const initialState = {
  loading: false,
  forms: [],
}
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Form Create Types */
    case formTypes.form_create.request:
      return { ...state, loading: true }
    case formTypes.form_create.success:
      return { ...state, loading: false, forms: [...state.forms, action.payload] }
    case formTypes.form_create.failure:
      return { ...state, loading: false }
    /* Form Delete */
    case formTypes.form_delete.request:
      return { ...state, loading: true }
    case formTypes.form_delete.success:
      return {
        ...state,
        loading: false,
        forms: state.forms.filter(i => i.id !== action.payload.id),
      }
    case formTypes.form_delete.failure:
      return { ...state, loading: false }
    default: {
      return state
    }
  }
}

export default formReducer
