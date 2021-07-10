/* eslint-disable eqeqeq */
import { put, select, takeLatest } from 'redux-saga/effects'

import { generateSchema } from '../../../utils/data/schemas'
import { duplicateElement } from '../../../utils/helpers'
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
    /* const { id, target } = action.payload
    if (id) {
      const components = yield select(getComponentElements)
      const data = yield select(getComponentById(id))
      const sourceIndex = components.findIndex(i => i.id == data.id)
      const targetIndex = components.findIndex(i => i.id == target)
      let modifiedArray = []
      if (target === 'start') {
        modifiedArray = swapArray(components, sourceIndex, 0)
      } else {
        modifiedArray = swapArray(components, sourceIndex, targetIndex)
      }
      yield put(componentActions.swapComponentSuccess(modifiedArray))
    } else {
      yield put(componentActions.createComponent(action.payload))
    } */
    const { payload } = action
    const { source, destination, draggableId } = payload
    if (elements.includes(draggableId)) {
      yield put(componentActions.createComponent(action.payload))
    } else {
      console.log('Swapping the components', source, destination)
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
