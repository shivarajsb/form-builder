import { formTypes } from '../types/'

const initialState = {
  loading: false,
  forms: [],
  currentForm: null,
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
    /* Select Form */
    case formTypes.select_form.request:
      return { ...state, loading: true }
    case formTypes.select_form.success:
      console.log('This is the current form', action.payload)
      return { ...state, loading: false, currentForm: action.payload }
    case formTypes.select_form.failure:
      return { ...state, loading: false, error: action.payload }
    default: {
      return state
    }
  }
}

export default formReducer
