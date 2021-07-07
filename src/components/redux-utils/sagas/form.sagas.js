import { put, takeLatest } from 'redux-saga/effects'
import { v4 as uuid } from 'uuid'

import { formActions } from '../actions'
import { formTypes } from '../types'

function* createForm(action) {
  try {
    const { payload } = action
    const formValues = { name: payload.label, id: uuid(), createdAt: Date.now() }
    yield put(formActions.createFormSuccess(formValues))
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
const watcherSaga = [
  takeLatest(formTypes.form_create.request, createForm),
  takeLatest(formTypes.form_delete.request, deleteForm),
]

export default watcherSaga
