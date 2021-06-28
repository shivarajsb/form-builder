import { combineReducers } from 'redux'

import componentsReducer from './component.reducer'
import formReducer from './form.reducer'

const rootReducer = combineReducers({
  forms: formReducer,
  components: componentsReducer,
})
export default rootReducer
