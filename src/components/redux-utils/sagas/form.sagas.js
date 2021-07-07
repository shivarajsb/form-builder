import { put, select, takeLatest } from 'redux-saga/effects'
import { v4 as uuid } from 'uuid'

import { formActions } from '../actions'
import { getForms } from '../selectors/form.selector'
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
function* selectForm(action) {
  try {
    const { payload } = action
    const forms = yield select(getForms)
    const selectedForm = forms.filter(item => item.id === payload)[0]
    yield put(formActions.selectFormSuccess(selectedForm))
  } catch (err) {
    yield put(formActions.selectFormFailure(action))
  }
}
const watcherSaga = [
  takeLatest(formTypes.form_create.request, createForm),
  takeLatest(formTypes.form_delete.request, deleteForm),
  takeLatest(formTypes.select_form.request, selectForm),
]

export default watcherSaga
