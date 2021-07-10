/* eslint-disable eqeqeq */
import { get } from 'lodash'
import { put, select, takeLatest } from 'redux-saga/effects'

import { generateSchema } from '../../../utils/data/schemas'
import { duplicateElement, moveArray } from '../../../utils/helpers'
import { componentActions } from '../actions'
import { getComponentById, getComponentElements } from '../selectors/component.selector'
import { componentTypes } from '../types'

const elements = ['input', 'container', 'checkbox', 'upload', 'text', 'divider']

function* createComponent(action) {
  try {
    const { payload } = action
    const { draggableId, destination } = payload
    const newElement = generateSchema(draggableId)
    const components = yield select(getComponentElements)
    let modifiedArray = []
    modifiedArray = [
      ...components.slice(0, destination.index),
      newElement,
      ...components.slice(destination.index),
    ]
    yield put(componentActions.createComponentSuccess(modifiedArray))
  } catch (err) {
    yield put(componentActions.createComponentFailure(err))
  }
}

function* deleteComponent(action) {
  try {
    const components = yield select(getComponentElements)
    const modified = components.filter(item => item.id !== action.payload.id)
    yield put(componentActions.deleteComponentSuccess(modified))
  } catch (err) {
    yield put(componentActions.deleteComponentFailure(err))
  }
}
function* editComponent(action) {
  try {
    const { payload } = action
    yield put(
      componentActions.editComponentSuccess({ id: payload.selected.id, data: payload.data })
    )
  } catch (err) {
    yield put(componentActions.editComponentFailure(err))
  }
}
function* swapComponent(action) {
  try {
    const { payload } = action
    const { source, destination, draggableId } = payload
    if (elements.includes(draggableId)) {
      yield put(componentActions.createComponent(action.payload))
    } else {
      const sourceIndex = get(source, 'index')
      const destinationIndex = get(destination, 'index')
      const components = yield select(getComponentElements)
      const modified = moveArray(components, sourceIndex, destinationIndex)
      yield put(componentActions.swapComponentSuccess(modified))
    }
  } catch (err) {
    yield put(componentActions.swapComponentFailure(err))
  }
}

function* duplicateComponent(action) {
  try {
    const { id } = action.payload
    const allComponents = yield select(getComponentElements)
    const component = yield select(getComponentById(id))
    const componentIndex = allComponents.findIndex(i => i.id == component.id)
    const componentCopy = duplicateElement(component)
    const modifiedArray = [
      ...allComponents.slice(0, componentIndex),
      componentCopy,
      ...allComponents.slice(componentIndex),
    ]
    yield put(componentActions.createDuplicateSuccess(modifiedArray))
  } catch (err) {
    yield put(componentActions.createDuplicateFailure(err))
  }
}
const watcherSaga = [
  takeLatest(componentTypes.component_create.request, createComponent),
  takeLatest(componentTypes.component_delete.request, deleteComponent),
  takeLatest(componentTypes.component_edit.request, editComponent),
  takeLatest(componentTypes.component_swap.request, swapComponent),
  takeLatest(componentTypes.component_duplicate.request, duplicateComponent),
]
export default watcherSaga
