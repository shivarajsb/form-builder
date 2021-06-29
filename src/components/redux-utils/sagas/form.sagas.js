import { put, takeLatest } from 'redux-saga/effects'

import { formActions } from '../actions'
import { formTypes } from '../types'

function* createForm(action) {
  try {
    yield put(formActions.createFormSuccess(action))
  } catch (err) {
    yield put(formActions.createFormFailure(action))
  }
}

function* deleteForm(action) {
  try {
    yield put(formActions.deleteFormSuccess(action))
  } catch (err) {
    yield put(formActions.deleteFormFailure(action))
  }
}
function* FormSagas() {
  yield takeLatest(formTypes.form_create.request, createForm)
  yield takeLatest(formTypes.form_delete.request, deleteForm)
}

export default FormSagas
