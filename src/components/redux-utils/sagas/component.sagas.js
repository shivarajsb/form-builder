import { put, takeLatest } from 'redux-saga/effects'

import { componentActions } from '../actions'
import { componentTypes } from '../types'

function* createComponent(action) {
  try {
    yield put(componentActions.createComponentSuccess(action))
  } catch (err) {
    yield put(componentActions.createComponentFailure(err))
  }
}

function* deleteComponent(action) {
  try {
    yield put(componentActions.deleteComponentSuccess(action))
  } catch (err) {
    yield put(componentActions.deleteComponentFailure(err))
  }
}
function* editComponent(action) {
  try {
    yield put(componentActions.editComponentSuccess(action))
  } catch (err) {
    yield put(componentActions.editComponentFailure(err))
  }
}
function* swapComponent(action) {
  try {
    yield put(componentActions.swapComponentSuccess(action))
  } catch (err) {
    yield put(componentActions.swapComponentFailure(err))
  }
}
function* ComponentSaga() {
  yield takeLatest(componentTypes.component_create.request, createComponent)
  yield takeLatest(componentTypes.component_delete.request, deleteComponent)
  yield takeLatest(componentTypes.component_edit.request, editComponent)
  yield takeLatest(componentTypes.component_swap, swapComponent)
}
export default ComponentSaga
