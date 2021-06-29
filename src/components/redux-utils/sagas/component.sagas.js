/* eslint-disable eqeqeq */
import { put, select, takeLatest } from 'redux-saga/effects'

import { generateSchema } from '../../../utils/data/schemas'
import { swapArray } from '../../../utils/helpers'
import { componentActions } from '../actions'
import { getComponentById, getComponentElements } from '../selectors/component.selector'
import { componentTypes } from '../types'

function* createComponent(action) {
  try {
    const { type, target } = action.payload
    const newElement = generateSchema(type)
    const components = yield select(getComponentElements)
    let modifiedArray = []
    if (target === 'end') {
      modifiedArray = [...components, newElement]
    } else {
      const targetIndex = components.findIndex(i => i.id == target)
      modifiedArray = [
        ...components.slice(0, targetIndex),
        newElement,
        ...components.slice(targetIndex),
      ]
    }

    yield put(componentActions.createComponentSuccess(modifiedArray))
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
    const { id, target } = action.payload
    if (id) {
      const components = yield select(getComponentElements)
      const data = yield select(getComponentById(id))
      const sourceIndex = components.findIndex(i => i.id == data.id)
      const targetIndex = components.findIndex(i => i.id == target)
      const modifiedArr = swapArray(components, sourceIndex, targetIndex)
      yield put(componentActions.swapComponentSuccess(modifiedArr))
    } else {
      yield put(componentActions.createComponent(action.payload))
    }
  } catch (err) {
    yield put(componentActions.swapComponentFailure(err))
  }
}
const watcherSaga = [
  takeLatest(componentTypes.component_create.request, createComponent),
  takeLatest(componentTypes.component_delete.request, deleteComponent),
  takeLatest(componentTypes.component_edit.request, editComponent),
  takeLatest(componentTypes.component_swap.request, swapComponent),
]
export default watcherSaga
