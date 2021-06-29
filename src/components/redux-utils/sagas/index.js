import { all } from 'redux-saga/effects'

import ComponentSaga from './component.sagas'
import FormSagas from './form.sagas'

function* rootSaga() {
  yield all([...ComponentSaga, ...FormSagas])
}
export default rootSaga
