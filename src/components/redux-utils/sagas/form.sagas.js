import axios from 'axios'
import { put, select, takeLatest } from 'redux-saga/effects'

import { formActions } from '../actions'
import { getForms } from '../selectors/form.selector'
import { formTypes } from '../types'

function* createForm(action) {
  try {
    const { payload } = action
    const response = yield axios.post('/forms', payload)
    yield put(formActions.createFormSuccess(response.data))
  } catch (err) {
    yield put(formActions.createFormFailure(action))
  }
}
function* getAllForms() {
  try {
    const response = yield axios.get('/forms')
    yield put(formActions.getFormsSuccess(response.data.data))
  } catch (err) {
    yield put(formActions.getFormsFailure())
  }
}

function* deleteForm(action) {
  try {
    yield axios.delete('/forms', { data: { id: action.payload } })
    yield put(formActions.deleteFormSuccess({ id: action.payload }))
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
  takeLatest(formTypes.get_forms.request, getAllForms),
  takeLatest(formTypes.form_create.request, createForm),
  takeLatest(formTypes.form_delete.request, deleteForm),
  takeLatest(formTypes.select_form.request, selectForm),
]

export default watcherSaga
