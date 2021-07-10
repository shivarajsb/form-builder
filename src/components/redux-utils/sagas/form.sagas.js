import axios from 'axios'
import { get } from 'lodash'
import { put, select, takeLatest } from 'redux-saga/effects'

import { componentActions, formActions } from '../actions'
import { saveFormSuccess } from '../actions/form.actions'
import { getCurrentForm, getFormById, getForms } from '../selectors/form.selector'
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
    const response = yield axios.get('/api')
    yield put(formActions.getFormsSuccess(response.data.data))
  } catch (err) {
    yield put(formActions.getFormsFailure())
  }
}

function* deleteForm(action) {
  try {
    yield axios.delete('/api', { data: { id: action.payload } })
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
    const response = yield axios.get(`/api/${selectedForm.id}`)
    const formComponents = get(response, 'data.components')
    yield put(componentActions.getFormComponentsSuccess(formComponents))
    yield put(formActions.selectFormSuccess(selectedForm))
  } catch (err) {
    yield put(formActions.selectFormFailure(err))
  }
}
function* saveForm(action) {
  try {
    const { payload } = action
    const { id } = payload
    const form = yield select(getFormById(id))
    yield put(saveFormSuccess(payload))
  } catch (err) {
    yield put(formActions.saveFormFailure(err))
  }
}
const watcherSaga = [
  takeLatest(formTypes.get_forms.request, getAllForms),
  takeLatest(formTypes.form_create.request, createForm),
  takeLatest(formTypes.form_delete.request, deleteForm),
  takeLatest(formTypes.select_form.request, selectForm),
  takeLatest(formTypes.save_form.request, saveForm),
]

export default watcherSaga
